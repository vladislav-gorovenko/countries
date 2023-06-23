"use client";

import { redirect } from "next/navigation";
import getBorderedCountries from "@/utils/getBorderedCountries";
import { BsArrowLeft } from "react-icons/bs";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Account() {
  const { data: session } = useSession();
  const user = session?.user as User;
  if (!session?.user) redirect("/");

  const [loading, setLoading] = useState(false);
  const [countriesVisited, setCountriesVisited] = useState<Country[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch("/api/get");
      const { data } = await response.json();
      if (!data.user) return;
      const visited = data.user.countriesVisited
        ? await getBorderedCountries(data.user.countriesVisited)
        : [];
      setCountriesVisited(visited);
      setLoading(false);
    };
    fetchData();
  }, []);

  const countries = countriesVisited.map((country) => {
    return (
      <Link
        key={country.cca3}
        className="rounded bg-header px-6 py-2 text-text shadow dark:bg-header-dark dark:text-text-dark"
        href={`${country.cca3}`}
      >
        {`${country.name.common} ${country.flag}`}
      </Link>
    );
  });
  const textToTweet = encodeURIComponent(
    `So far I've visited ${
      countries.length
    } countries, namely: ${countriesVisited
      .map((c) => c.flag)
      .join(", ")}. There are still ${195 - countries.length} to explore...`
  );
  const urlToTweet = encodeURI(`https://countries-martinideniam.vercel.app`);
  return (
    <div>
      <Link
        className=" mb-10 mt-2 flex w-max items-center justify-start gap-2 rounded bg-header px-6 py-2 text-text shadow focus:outline-none dark:bg-header-dark dark:text-text-dark"
        href="/countries"
      >
        <BsArrowLeft />
        Countries
      </Link>
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="text-xl font-bold">Countries visited:</h1>{" "}
        {loading ? "loading..." : countries}
      </div>
      <div className="mt-8 flex flex-col gap-2">
        <h1>That&apos;s your status so far 👇🏻</h1>
        <div className="  max-w-md flex-1 rounded bg-slate-200 p-4 dark:bg-slate-700 ">
          {countries.length === 0 ? (
            <p>So far I&apos;ve not visited any countries 🥲</p>
          ) : countries.length === 1 ? (
            <p>
              So far I&apos;ve visited only one country, namely{" "}
              {countriesVisited[0].flag}
            </p>
          ) : (
            <p>
              So far I&apos;ve visited {countries.length} countries, namely:{" "}
              {countriesVisited.map((c) => c.flag).join(", ")}.
            </p>
          )}
          <p>There are still {195 - countries.length} to explore... 🥹</p>
        </div>
        <Link
          href={`https://twitter.com/intent/tweet?text=${textToTweet}&url=${urlToTweet}`}
          target="_blank"
          className="w-fit rounded bg-blue-200 px-4 py-2 dark:bg-blue-900"
        >
          Press to tweet
        </Link>
      </div>
    </div>
  );
}
