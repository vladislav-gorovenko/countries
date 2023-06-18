"use client";
import Country from "./Country";
import { useContext } from "react";
import { SearchContext } from "./providers/searchContext";
import { useEffect, useState } from "react";

export default function CountriesGrid({ countries }: { countries: Country[] }) {
  const { searchParameters } = useContext(SearchContext);
  const [loading, setLoading] = useState(false);
  const [countriesVisited, setCountriesVisited] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch("/api/get");
      const { data } = await response.json();
      if (!data.user) return;
      setCountriesVisited(data.user.countriesVisited);
      setLoading(false);
    };
    fetchData();
  }, []);

  const filteredCountries = countries.filter((country) => {
    const { region, name } = searchParameters;
    return (
      country.name.common.toLowerCase().trim().includes(name) &&
      country.region.toLowerCase().trim().includes(region)
    );
  });
  const content = filteredCountries.map((country) => {
    console.log(countriesVisited.includes(country.cca3));
    return (
      <Country
        key={
          country.cca3 +
          (countriesVisited.includes(country.cca3) ? "_visited" : "")
        }
        country={country}
        visitedAlready={countriesVisited.includes(country.cca3)}
      />
    );
  });

  return (
    <div className=" mt-8 grid grid-cols-1 justify-center gap-16  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {content}
    </div>
  );
}
