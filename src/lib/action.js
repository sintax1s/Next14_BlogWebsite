"use server";

import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import { connectToDb } from "./connectToDb";
import { Post, User } from "./models";
import bcrypt from "bcryptjs";

export const addPost = async (previousState, formData) => {
  const { title, desc, slug, img, userId } = Object.fromEntries(formData);
  
  try {
    connectToDb();

    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
      img,
    })
    await newPost.save();
    console.log('Post saved successfully');
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    return {error: 'Something went wrong'}
  }
}

export const removePost = async (id) => {
  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log('Post deleted successfully');
    revalidatePath("/admin");
    revalidatePath("/blog");
  } catch (error) {
    return {error: 'Something went wrong'}
  }
}

export const addUser = async (previousState, formData) => {
  const { username, email, password, img, isAdmin } = Object.fromEntries(formData);

  if (password.length < 6) {
    return {error: "Password must be at least 6 characters"};
  }

  try {
    connectToDb();

    const user = await User.findOne({email})

    if (user) {
      return {error: 'User with this email already in database'};
    }

    const newUser = new User({
      username, 
      email,
      password, 
      img,
      isAdmin,
    })
    await newUser.save();
    console.log('User created successfully');
    revalidatePath("/admin");
    revalidatePath("/blog");
  } catch (error) {
    return {error: 'Something went wrong'}
  }
}

export const deleteUser = async (id) => {
  try {
    connectToDb();

    await Post.deleteMany({userId: id})
    await User.findByIdAndDelete(id);
    console.log('User deleted successfully');
    revalidatePath("/admin");
    revalidatePath("/blog");
  } catch (error) {
    return {error: 'Something went wrong'}
  }
}

export const handleGitHubLogin = async () => {
  await signIn("github");
};

export const handleGoogleLogin = async () => {
  await signIn("google");
};


export const handleLogOut = async () => {
  await signOut();
};

export const register = async (previousState, formData) => {
  const { username , email, image, password, passwordRepeat } = Object.fromEntries(formData);

  if (password.length < 6) {
    return {error: "Password must be at least 6 characters"};
  }

  if (password !== passwordRepeat) {
    return {error: "Passwords do not match"}
  }

  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    connectToDb();

    const user = await User.findOne({email})

    if (user) {
      return {error: 'User with this email already registered'};
    }

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img: image,
    })

    await newUser.save();
    console.log("User saved to database");

    return {success: true}
  } catch (error) {
    console.log(error);

    throw new Error('Could not register user');
  }
}

export const login = async (previousState, formData) => {
  const { email , password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { email, password });

    return {success: true}

  } catch (error) {
    console.log(error);
    if(error.message.includes('CredentialsSignin')) {
      return {error: "Invalid email or password"}
    }

    throw error;
  }
}