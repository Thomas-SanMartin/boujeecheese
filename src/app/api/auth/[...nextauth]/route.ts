import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "../../../../../lib/db";
import bcrypt from "bcrypt";
import User from "../../../../../models/User";

export const authOptions = {
  session: {
    strategy: 'jwt' as 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "your@email.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
      
        await connectDB();
        const user = await User.findOne({ email: credentials?.email });
      
        if (!user) {
          throw new Error("User not found");
        }
      
        // Compare password
        const isValidPassword = await bcrypt.compare(credentials!.password, user.password);
      
        if (!isValidPassword) {
          throw new Error("Invalid password");
        }
        
        return { id: user.id, name: user.name, email: user.email };
      }
      
    ,
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: any; user?: any }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      session.user.id = token.id;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
