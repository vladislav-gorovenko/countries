import getCountry from "@/utils/getCountry";
import Image from "next/image";
import BorderingCountries from "./components/BorderingCountries";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { getUser } from "../../../../lib/prisma/users";

type Params = {
  params: {
    id: string;
  };
};

export default async function Ccn({ params: { id } }: Params) {
  const country = await getCountry(id);
  const data = await getUser("martinideniam@gmail.com");
  console.log(data);
  return (
    <>
      <Link
        className="mb-10 mt-8 flex w-max items-center justify-start gap-2 rounded bg-header px-6 py-2 text-text shadow dark:bg-header-dark dark:text-text-dark"
        href="/countries"
      >
        <BsArrowLeft />
        Back
      </Link>
      <div className=" grid grid-cols-1 items-center  gap-x-16 gap-y-6  text-text dark:text-text-dark sm:grid-cols-2">
        <Image
          height={160}
          width={320}
          src={country.flags.svg}
          alt={country.flags.alt || `flag of ${country.name.common}`}
          className=" w-full rounded object-cover"
        />
        <div className=" grid gap-6">
          <h1 className="text-2xl font-extrabold leading-tight">
            {country.name.common}
          </h1>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div>
              <p className="mb-1 text-sm">
                <span className=" font-bold">Native Name: </span>
                {(() => {
                  const nativeNames = country.name.nativeName
                    ? Object.entries(country.name.nativeName)
                    : [];
                  if (nativeNames.length > 0) {
                    const [_, value] = nativeNames[0];
                    return `${value.official}`;
                  }
                  return "No native names available.";
                })()}
              </p>
              <p className="mb-1 text-sm">
                <span className=" font-bold">Population: </span>
                {country.population}
              </p>
              <p className="mb-1 text-sm">
                <span className="font-bold">Region: </span>
                {country.region}
              </p>
              <p className="mb-1 text-sm">
                <span className="font-bold">Sub Region: </span>
                {country.subregion}
              </p>
              <p className="mb-1 text-sm">
                <span className="font-bold">Capital: </span>
                {country.capital}
              </p>
            </div>
            <div>
              <p className="mb-1 text-sm">
                <span className=" font-bold">Top Level Domain: </span>
                {country.tld.join(" / ")}
              </p>
              <p className="mb-1 text-sm">
                <span className=" font-bold">Currencies: </span>
                {(() => {
                  const currencies = country.currencies
                    ? Object.values(country.currencies)
                    : [];
                  if (currencies.length) {
                    return currencies
                      .map((currency) => currency.name)
                      .join(", ");
                  }
                  return "No currencies available.";
                })()}
              </p>

              <p className="mb-1 text-sm">
                <span className=" font-bold">Languages: </span>
                {(() => {
                  const languages = country.languages
                    ? Object.values(country.languages)
                    : [];
                  if (languages.length) {
                    return languages.join(", ");
                  }
                  return "No languages available.";
                })()}
              </p>
            </div>
          </div>

          {country.borders?.length && (
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="font-semibold">Border Countries: </h1>
              <BorderingCountries country={country} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
