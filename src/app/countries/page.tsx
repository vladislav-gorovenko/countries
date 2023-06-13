import Search from "./components/Search";
import getAllCountries from "@/utils/getAllCountries";
import CountriesGrid from "./components/CountriesGrid";

export default async function Countries() {
  const countries = await getAllCountries();

  return (
    <>
      <Search />
      <CountriesGrid countries={countries} />
    </>
  );
}
