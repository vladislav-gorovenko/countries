export default async function getAllCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  if (!response.ok) throw new Error("failed to fetch countries");
  const data: Country[] = await response.json();
  return data;
}
