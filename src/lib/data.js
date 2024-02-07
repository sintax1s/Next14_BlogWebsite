import { connectToDb } from "./connectToDb.js";
import { Post, User } from "./models.js";

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();

    return posts;
  } catch (error) {
    throw new Error('Failed to get posts');
  }
};

export const getOnePost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({slug});

    return post;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get one post');
  }
}

export const getUser = async (id) => {
  try {
    connectToDb();
    const user = await User.findById(id);
    
    return user;
  } catch (error) {
    throw new Error('Failed to get user');
  }
}

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();

    return users;
  } catch (error) {
    throw new Error('Failed to get users');
  }
}