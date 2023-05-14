import NextAuth from "next-auth";
import { authOptions } from "twitter-clone-t3-stack/server/auth";

export default NextAuth(authOptions);
