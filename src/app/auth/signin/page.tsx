"use client";
import { AiFillGoogleCircle } from "react-icons/ai";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function SigninPage() {
  const { data: session } = useSession();
  if (session) {
    return redirect("/");
  }
  return (
    <div>
      <h1>
        You are now just one click away from awesome experience. Just smash that
        button bellow 😃
      </h1>
      <button
        onClick={() => {
          signIn("google");
        }}
        className="mt-4 flex items-center gap-1 rounded bg-slate-200 px-4 py-2 transition-transform hover:scale-95 dark:bg-slate-500"
      >
        <h1 className="text-lg font-bold">Log in with</h1>
        <AiFillGoogleCircle size={30} />
      </button>
    </div>
  );
}
