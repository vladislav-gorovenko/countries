"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsSun, BsMoon } from "react-icons/bs";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { data: session } = useSession();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <header className=" bg-header shadow-md dark:bg-header-dark">
        <div className="mx-auto flex max-w-6xl justify-between px-4   py-8   ">
          <h1 className="text-2xl font-extrabold">
            <Link href="/">Where in the world?</Link>
          </h1>
          <div>
            <button className="flex items-center gap-2">... Mode</button>
          </div>
        </div>
      </header>
    );
  }

  function toggleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  function chooseIcon() {
    return theme === "light" ? <BsMoon /> : <BsSun size={18} />;
  }

  return (
    <header className=" bg-header shadow-md dark:bg-header-dark">
      <div className="mx-auto flex max-w-6xl justify-between px-4   py-8  ">
        <h1 className="text-2xl font-extrabold">
          <Link href="/">Where in the world?</Link>
        </h1>
        <div className="flex gap-4">
          {session?.user?.image && (
            <Link href="/countries/account">
              <Image
                src={session.user.image}
                alt="account image"
                height={30}
                width={30}
                className="rounded-full"
              />
            </Link>
          )}
          <button className="flex items-center gap-2" onClick={toggleTheme}>
            {chooseIcon()} Mode
          </button>
        </div>
      </div>
    </header>
  );
}
