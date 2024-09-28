import { CustomProvider } from '@/auth/customProvider';
import NextAuth from 'next-auth';

const handler = NextAuth({
  providers: [CustomProvider],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token;
        token.name = user.name
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      
      return session;
    }
  }
});

export { handler as GET, handler as POST };