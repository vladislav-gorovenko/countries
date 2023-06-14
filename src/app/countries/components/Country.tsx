"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Country({ country }: { country: Country }) {
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
        alt={country.flags.alt || `flag of ${country.name}`}
        className="aspect-[320/160] w-full object-cover"
      />
      <div className="flex w-full flex-1 flex-col  items-start justify-center px-4 py-6">
        <h1 className=" mb-2 text-lg font-extrabold leading-tight">
          {country.name.common}
        </h1>
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
