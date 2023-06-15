"use client";
import Country from "./Country";
import { useContext } from "react";
import { SearchContext } from "./providers/searchContext";

export default function CountriesGrid({ countries }: { countries: Country[] }) {
  const { searchParameters } = useContext(SearchContext);

  const filteredCountries = countries.filter((country) => {
    const { region, name } = searchParameters;
    return (
      country.name.common.toLowerCase().trim().includes(name) &&
      country.region.toLowerCase().trim().includes(region)
    );
  });
  const content = filteredCountries.map((country) => {
    return <Country key={country.cca3} country={country} />;
  });

  return (
    <div className=" mt-8 grid grid-cols-1 justify-center gap-16  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {content}
    </div>
  );
}
