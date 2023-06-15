import Search from "./components/Search";
import getAllCountries from "@/utils/getAllCountries";
import CountriesGrid from "./components/CountriesGrid";
import SearchContextProvider from "./components/providers/searchContext";

export default async function Countries() {
  const countries = await getAllCountries();

  return (
    <SearchContextProvider>
      <Search />
      <CountriesGrid countries={countries} />
    </SearchContextProvider>
  );
}
