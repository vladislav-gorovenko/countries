"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsSun, BsMoon } from "react-icons/bs";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  function toggleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  function chooseIcon() {
    return theme === "light" ? <BsMoon /> : <BsSun size={18} />;
  }

  return (
    <header className="flex flex-col">
      <div className="= flex justify-between bg-header px-4   py-8 shadow-md dark:bg-header-dark">
        <h1 className="text-lg font-extrabold">
          <Link href="/">Where in the world?</Link>
        </h1>
        <button className="flex items-center gap-2" onClick={toggleTheme}>
          {chooseIcon()} Mode
        </button>
      </div>
    </header>
  );
}
