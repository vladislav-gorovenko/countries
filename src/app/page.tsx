"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0.5, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="my-6 text-3xl font-extrabold sm:text-4xl">
        Introducing{" "}
        <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text font-extrabold text-transparent">
          Where in the World?
        </span>{" "}
      </h1>
      <p className="mb-6 max-w-2xl">
        The whole world is at your finger tips now. To start browsing countries
        just press <span className="font-bold">browse</span>, or get even more
        functionality by creating{" "}
        <span className="font-bold">free account</span>.
      </p>
      <div className="flex gap-2">
        <Link
          className="mb-6 inline-block rounded bg-header-dark px-4 py-2 text-text-dark transition-transform hover:scale-95 dark:bg-header dark:text-text"
          href="/countries"
        >
          Browse
        </Link>

        <Link
          className=" mb-6 inline-block rounded bg-green-600 px-4 py-2 text-text-dark transition-transform hover:scale-95 dark:bg-green-200 dark:text-text"
          href="/countries"
        >
          Log in
        </Link>
      </div>
    </motion.div>
  );
}
