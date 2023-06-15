import NextAuth, { AuthOptions } from "next-auth";
import { authOptions } from "../../../../config/authConfig";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
