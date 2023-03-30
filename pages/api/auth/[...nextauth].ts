import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import dbConnect from '../../../configs/db-config';
import User from '../../../models/user-model';
import { comparePasswords } from '../../../utils/password-crypt';

export default NextAuth({
  session: { strategy: 'jwt' },
  secret: process.env.JWT_SECRET,
  providers: [
    Credentials({
      type: 'credentials',
      credentials: {},
      async authorize(credentials) {
        await dbConnect();
        const { email, password }: any = credentials;
        const user: any = await User.findOne({ email });
        if (!user) throw new Error('User not found');
        const correctPassword = await comparePasswords(password, user.password);
        if (!correctPassword) throw new Error('Incorrect password');
        return { email: user.email, id: user._id, role: user.role };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = token.sub;
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session && session.user) {
        (session.user as any).id = token.id;
        (session.user as any).role = token.role;
      }
      return session;
    },
  },
});
