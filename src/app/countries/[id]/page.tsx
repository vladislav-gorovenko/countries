import getAllCountries from "@/utils/getAllCountries";
import getBorderedCountries from "@/utils/getBorderedCountries";
import getCountry from "@/utils/getCountry";
import Image from "next/image";

type Params = {
  params: {
    id: string;
  };
};

export default async function Ccn({ params: { id } }: Params) {
  const country = await getCountry(id);
  const countries = await getBorderedCountries();

  return (
    <>
      <div className="flex h-full flex-col items-center justify-start text-text  dark:text-text-dark">
        <Image
          height={160}
          width={320}
          src={country.flags.svg}
          alt={country.flags.alt || `flag of ${country.name}`}
          className="aspect-[320/160] w-full rounded object-cover"
        />
        <div className="flex w-full flex-1 flex-col  items-start justify-center py-6">
          <div>
            <h1 className=" mb-2 text-2xl font-extrabold leading-tight">
              {country.name.common}
            </h1>
            <p className="mb-1 text-sm">
              <span className=" font-bold">Native Name: </span>
              {(() => {
                const nativeNames = Object.entries(country.name.nativeName);
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
                const currencies = Object.values(country.currencies);
                if (currencies.length) {
                  return currencies.map((currency) => currency.name).join(", ");
                }
                return "No currencies available.";
              })()}
            </p>

            <p className="mb-1 text-sm">
              <span className=" font-bold">Languages: </span>
              {(() => {
                const languages = Object.values(country.languages);
                if (languages.length) {
                  return languages.join(", ");
                }
                return "No languages available.";
              })()}
            </p>
          </div>
          <div>
            <h1 className="font-bold">Border Countries: </h1>
          </div>
        </div>
      </div>
    </>
  );
}
