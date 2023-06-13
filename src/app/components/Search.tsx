import { BsSearch } from "react-icons/bs";

export default function Search() {
  return (
    <div>
      <div className="flex h-14 items-center justify-start gap-4 rounded bg-header px-8 shadow-sm dark:bg-header-dark ">
        <BsSearch className=" fill-input-text dark:fill-input-text-dark " />
        <input
          className="flex-1 bg-inherit "
          placeholder="Search for a country ..."
          type="text"
        />
      </div>
    </div>
  );
}
