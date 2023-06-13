type Country = {
  name: {
    common: string;
    official: string;
  };
  ccn3: string;
  population: number;
  region: string;
  capital: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  region: string;
};

type CountryDetailed = Country & {
  name: {
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  subregion: sring;
  capital: string[];
  borders: string[];
  tld: string[];
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  languages: {
    [key: string]: string;
  };
};
