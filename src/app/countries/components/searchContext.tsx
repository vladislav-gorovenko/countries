"use client";
import { ReactNode, createContext, useState } from "react";

const initialSearchParameters = {
  name: "",
  region: "",
};

const initialValue = {
  searchParameters: initialSearchParameters,
  changeName: (newName: string) => {},
  changeRegion: (newRegion: string) => {},
};

export const SearchContext = createContext(initialValue);

export default function SearchContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [searchParameters, setSearchParameters] = useState(
    initialSearchParameters
  );

  function changeName(newName: string) {
    setSearchParameters((prevSearchParameters) => {
      return {
        ...prevSearchParameters,
        name: newName.toLowerCase().trim(),
      };
    });
  }

  function changeRegion(newRegion: string) {
    setSearchParameters((prevSearchParameters) => {
      return {
        ...prevSearchParameters,
        region: newRegion.toLowerCase().trim(),
      };
    });
  }

  return (
    <SearchContext.Provider
      value={{ searchParameters, changeName, changeRegion }}
    >
      {children}
    </SearchContext.Provider>
  );
}
