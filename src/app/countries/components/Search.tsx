"use client";
import { BsSearch } from "react-icons/bs";
import Filter from "./Filter";
import { useContext } from "react";
import { SearchContext } from "./searchContext";
import { useState } from "react";
import { FormEvent } from "react";

export default function Search() {
  const { changeName } = useContext(SearchContext);
  const [search, setSearch] = useState("");

  function handleInput(e: FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    setSearch(target.value);
    changeName(target.value);
  }

  return (
    <div className="flex flex-wrap justify-between gap-4">
      <div className="flex h-14 basis-[480px]  items-center justify-start gap-4 rounded bg-header px-6 shadow-sm dark:bg-header-dark ">
        <BsSearch className=" fill-input-text dark:fill-input-text-dark " />
        <input
          className="flex-1 bg-inherit "
          placeholder="Search for a country ..."
          type="text"
          value={search}
          onInput={handleInput}
        />
      </div>
      <Filter />
    </div>
  );
}
