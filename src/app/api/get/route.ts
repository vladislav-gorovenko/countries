import { getServerSession } from "next-auth";
import { authOptions } from "@/config/authConfig";
import { NextResponse } from "next/server";
import { getUser } from "../../../../lib/prisma/users";

type Params = {
  params: {
    country: string;
  };
};

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  const user = session?.user as User;
  if (!user) return NextResponse.json({ message: "failed to fetch user" });
  const email = user.email;
  const data = await getUser(email);
  return NextResponse.json({ data });
}
