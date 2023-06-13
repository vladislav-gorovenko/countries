import getAllCountries from "./getAllCountries";

export default async function getBorderedCountries() {
  const countries = await getAllCountries();
  console.log(countries);
}
