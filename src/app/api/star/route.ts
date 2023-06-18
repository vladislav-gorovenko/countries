import { getServerSession } from "next-auth";
import { authOptions } from "@/config/authConfig";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log(request);
  const session = await getServerSession(authOptions);
  const user = session?.user as User;
  if (!user) return NextResponse.json({ message: "failed to fetch user" });

  const email = user.email;

  return NextResponse.json({ message: "ok" });
}
