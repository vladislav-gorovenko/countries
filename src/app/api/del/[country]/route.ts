import { getServerSession } from "next-auth";
import { authOptions } from "@/config/authConfig";
import { NextResponse } from "next/server";
import { removeCountry } from "../../../../../lib/prisma/users";

type Params = {
  params: {
    country: string;
  };
};

export async function GET(request: Request, { params }: Params) {
  const session = await getServerSession(authOptions);
  const user = session?.user as User;
  const country = params.country;
  if (!user) return NextResponse.json({ message: "failed to fetch user" });
  const email = user.email;
  const data = await removeCountry(email, country);
  return NextResponse.json({ data });
}
