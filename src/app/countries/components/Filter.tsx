"use client";

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useContext } from "react";
import { SearchContext } from "./searchContext";

const choice = [
  { name: "All", value: "" },
  { name: "Africa", value: "africa" },
  { name: "America", value: "america" },
  { name: "Asia", value: "asia" },
  { name: "Europe", value: "europe" },
  { name: "Oceania", value: "oceania" },
];

type Choice = {
  name: string;
  value: string;
};

export default function Filter() {
  const [selected, setSelected] = useState(choice[0]);
  const { changeRegion, searchParameters } = useContext(SearchContext);

  console.log(searchParameters);

  function handleChange(selection: Choice) {
    setSelected(selection);
    changeRegion(selection.value);
  }

  return (
    <div className="w-72">
      <Listbox value={selected} onChange={handleChange}>
        <div className="relative">
          <Listbox.Button className="relative flex h-14 w-full cursor-default items-center justify-between rounded bg-header px-6  text-left text-text shadow-sm dark:bg-header-dark  dark:text-text-dark ">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none  inset-y-0  flex items-center ">
              <ChevronUpDownIcon
                className="h-5 w-5 text-text dark:text-text-dark"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-4 max-h-60 w-full overflow-auto rounded bg-header py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-header-dark ">
              {choice.map((choice, id) => (
                <Listbox.Option
                  key={id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? " bg-slate-100 dark:bg-slate-500"
                        : "text-text dark:text-text-dark"
                    }`
                  }
                  value={choice}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {choice.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
