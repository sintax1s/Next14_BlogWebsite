import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "./connectToDb";
import { authConfig } from "../lib/auth.config";
import bcrypt from 'bcryptjs';
import { User } from "./models";

const login = async (credentials) => {
  try {
    connectToDb();

    const user = await User.findOne({ email: credentials.email });

    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

    if (!isPasswordCorrect) {
      throw new Error('Wrong password');
    }

    return user;
  } catch (error) {
    console.log(error);

    throw new Error('Failed to login');
  }
};

export const { handlers: {GET, POST}, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [ GitHub({
      clientId: process.env.GITHUB_ID, 
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Google({ 
      clientId: process.env.GOOGLE_ID, 
      clientSecret: process.env.GOOGLE_SECRET 
    }),
    CredentialsProvider({ 
      async authorize(credentials) {
        try {
          const user = await login(credentials);

          return user;
        } catch (error) {
          return null;
        }
      }
    })
  ],
  callbacks: {
    async signIn({account, profile}) {
      if (account.provider === 'google') {
        connectToDb()
        try {
          const user = await User.findOne({ email: profile.email });

          if (!user) {
            const newUser = new User({
              username: profile.name,
              email: profile.email,
              img: profile.picture,
            });

            await newUser.save();
          }

        } catch (error) {
          console.log(error);

          return false;
        }
      }

      if (account.provider === "github") {
        connectToDb()
        try {
          const user = await User.findOne({ email: profile.email });

          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              img: profile.avatar_url,
            });

            await newUser.save();
          }

        } catch (error) {
          console.log(error);

          return false;
        }
      }
      return true;
    },
    ...authConfig.callbacks,
  }
});