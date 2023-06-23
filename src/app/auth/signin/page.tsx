"use client";
import { AiFillGoogleCircle } from "react-icons/ai";
import { signIn } from "next-auth/react";

export default function SigninPage() {
  return (
    <div>
      <h1>You are now one click away from awesome experience 😃</h1>
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
