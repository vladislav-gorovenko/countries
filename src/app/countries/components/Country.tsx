"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function Country({
  country,
  visitedAlready,
}: {
  country: Country;
  visitedAlready?: boolean;
}) {
  const [visited, setVisited] = useState(visitedAlready ? true : false);
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();

  async function handleClick() {
    const previousValue = visited;
    setLoading(true);
    setVisited((prevVisited) => {
      return !prevVisited;
    });
    if (previousValue) {
      const response = await fetch(`api/del/${country.cca3}`);
    } else {
      const response = await fetch(`api/add/${country.cca3}`);
    }
    setLoading(false);
  }

  function generateStar() {
    if (session?.user) {
      return visited ? (
        <button
          className="cursor-pointer disabled:cursor-not-allowed"
          disabled={loading}
          onClick={handleClick}
        >
          <AiFillStar
            size={20}
            className=" fill-green-600 transition-transform hover:scale-125"
          />
        </button>
      ) : (
        <button
          className="cursor-pointer disabled:cursor-not-allowed"
          disabled={loading}
          onClick={handleClick}
        >
          <AiOutlineStar
            size={20}
            className=" transition-all hover:scale-125 hover:fill-green-600"
          />
        </button>
      );
    }

    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex h-full flex-col items-center justify-start overflow-hidden rounded bg-header text-text  shadow dark:bg-header-dark dark:text-text-dark"
    >
      <Image
        height={160}
        width={320}
        src={country.flags.svg}
        alt={country.flags.alt || `flag of ${country.name.common}`}
        className="aspect-[320/160] w-full object-cover"
      />

      <div className="flex w-full flex-1 flex-col  items-start justify-center  px-4 py-6">
        <div className="mb-2 flex items-center gap-2 ">
          <Link
            href={`/countries/${country.cca3}`}
            className="underline-offset-1 hover:underline"
          >
            <h1 className=" text-lg font-extrabold leading-tight">
              {country.name.common}
            </h1>
          </Link>
          {generateStar()}
        </div>
        <p className="text-sm">
          <span className=" font-bold">Population: </span>
          {country.population}
        </p>
        <p className="text-sm">
          <span className="font-bold">Region: </span>
          {country.region}
        </p>
        <p className="text-sm">
          <span className="font-bold">Capital: </span>
          {country.capital}
        </p>
      </div>
    </motion.div>
  );
}
