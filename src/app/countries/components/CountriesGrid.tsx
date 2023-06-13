export default function CountriesGrid({ countries }: { countries: Country[] }) {
  return <div>{countries[0].capital}</div>;
}
