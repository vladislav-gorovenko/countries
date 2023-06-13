export default async function getCountry(id: string) {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
  if (!response.ok) throw new Error("failed to fetch country");
  const data: CountryDetailed[] = await response.json();
  return data[0];
}
