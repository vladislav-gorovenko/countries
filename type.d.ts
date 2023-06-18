type Country = {
  name: {
    common: string;
    official: string;
  };
  cca3: string;
  population: number;
  borders: string[];
  region: string;
  capital: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  region: string;
  flag: string;
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

type User = {
  name: string;
  email: string;
  image: string;
};
