"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useSession, signIn, signOut } from "next-auth/react";
import { AiFillStar } from "react-icons/ai";

export default function Home() {
  const { data: session } = useSession();

  return (
    <motion.div
      initial={{ opacity: 0.5, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p>{session ? `Signed in as ${session.user?.email}` : "Not signed in"}</p>
      <h1 className="my-6 text-3xl font-extrabold sm:text-4xl">
        Introducing{" "}
        <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text font-extrabold text-transparent">
          Where in the World?
        </span>{" "}
      </h1>
      {session ? (
        <p className="mb-6 max-w-2xl">
          The whole world is at your finger tips now. To start browsing
          countries just press <span className="font-bold">browse</span>. Since
          you already <span className="font-bold">logged in</span>, you can
          select countries you've already visited by pressing{" "}
          <AiFillStar
            size={20}
            className="inline cursor-pointer fill-green-600 transition-transform hover:scale-125"
          />{" "}
          on each country card , see how many ones there are still remaining to
          visit, get some cool generated tweets to share on Twitter ...
        </p>
      ) : (
        <p className="mb-6 max-w-2xl">
          The whole world is at your finger tips now. To start browsing
          countries just press <span className="font-bold">browse</span>, or get
          even more functionality by{" "}
          <span className="font-bold">logging in</span>.
        </p>
      )}

      <div className="flex gap-2">
        <Link
          className="mb-6 inline-block rounded bg-header-dark px-4 py-2 text-text-dark transition-transform hover:scale-95 dark:bg-header dark:text-text"
          href="/countries"
        >
          Browse
        </Link>

        <Link
          className={`mb-6 inline-block rounded ${
            session
              ? "bg-red-600 dark:bg-red-200"
              : "bg-green-600 dark:bg-green-200"
          }  px-4 py-2 text-text-dark transition-transform hover:scale-95  dark:text-text`}
          href="/countries"
          onClick={session ? () => signOut() : () => signIn()}
        >
          {session ? "Sign out" : "Sign in"}
        </Link>
      </div>
    </motion.div>
  );
}
