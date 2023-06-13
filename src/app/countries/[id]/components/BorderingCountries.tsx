import getBorderedCountries from "@/utils/getBorderedCountries";
import Link from "next/link";

export default async function BorderingCountries({
  country,
}: {
  country: Country;
}) {
  const borderingCountries = await getBorderedCountries(country.borders);
  const borderingCounriesLinks = borderingCountries.map((country) => {
    return (
      <Link
        key={country.cca3}
        className="rounded bg-header px-6 py-2 text-text shadow dark:bg-header-dark dark:text-text-dark"
        href={`${country.cca3}`}
      >
        {country.name.common}
      </Link>
    );
  });
  return <div className="flex flex-wrap gap-3">{borderingCounriesLinks}</div>;
}
