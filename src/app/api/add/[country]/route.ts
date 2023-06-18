import { getServerSession } from "next-auth";
import { authOptions } from "@/config/authConfig";
import { NextResponse } from "next/server";

type Params = {
  params: {
    country: string;
  };
};

export async function GET(request: Request, { params: country }: Params) {
  const session = await getServerSession(authOptions);
  const user = session?.user as User;
  if (!user) return NextResponse.json({ message: "failed to fetch user" });

  const email = user.email;

  return NextResponse.json({ message: "ok" });
}
