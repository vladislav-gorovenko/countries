"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function Country({ country }: { country: Country }) {
  const visited = true;
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
          {visited ? (
            <AiFillStar
              size={20}
              className="cursor-pointer fill-green-600 transition-transform hover:scale-125"
            />
          ) : (
            <AiOutlineStar
              size={20}
              className="cursor-pointer transition-all hover:scale-125 hover:fill-green-600"
            />
          )}
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
