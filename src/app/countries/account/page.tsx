import { getServerSession } from "next-auth";
import { authOptions } from "@/config/authConfig";
import { getUser } from "../../../../lib/prisma/users";
import { redirect } from "next/navigation";
import getBorderedCountries from "@/utils/getBorderedCountries";
import Link from "next/link";

export const revalidate = 0;

export default async function Account() {
  const session = await getServerSession(authOptions);
  const user = session?.user as User;
  const data = await getUser(user.email);
  if (!data.user) redirect("/");
  const countriesVisited = data.user.countriesVisited
    ? await getBorderedCountries(data.user.countriesVisited)
    : [];

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
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="text-xl font-bold">Countries visited:</h1> {countries}
      </div>
      <div className="mt-8 flex flex-col gap-2">
        <h1>That&apos;s your status so far 👇🏻</h1>
        <div className="  max-w-md flex-1 rounded bg-slate-200 p-4 dark:bg-slate-700 ">
          <p>
            So far I&apos;ve visited {countries.length} countries, namely:{" "}
            {countriesVisited.map((c) => c.flag).join(", ")}.
          </p>
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
