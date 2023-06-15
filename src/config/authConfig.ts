import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

console.log("VLAAaaaaad", process.env.NEXTAUTH_SECRET);

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
