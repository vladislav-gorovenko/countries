import getAllCountries from "./getAllCountries";

export default async function getBorderedCountries(borders: string[]) {
  const countries = await getAllCountries();
  return countries.filter((country) => borders?.includes(country.cca3));
}
