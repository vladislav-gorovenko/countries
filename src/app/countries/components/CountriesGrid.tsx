import Image from "next/image";

export default function CountriesGrid({ countries }: { countries: Country[] }) {
  const content = countries.map((country) => {
    return (
      <div>
        <Image
          height={160}
          width={264}
          src={country.flags.png}
          alt={country.flags.alt}
          className="obje"
        />
        <h1>{country.name.common}</h1>
        <p>
          <span className="font-bold">Population: </span>
          {country.population}
        </p>
        <p>
          <span className="font-bold">Region: </span>
          {country.region}
        </p>
        <p>
          <span className="font-bold">Capital: </span>
          {country.capital}
        </p>
      </div>
    );
  });
  return (
    <div className="mt-8 grid grid-cols-1  gap-4 bg-red-50">{content}</div>
  );
}
