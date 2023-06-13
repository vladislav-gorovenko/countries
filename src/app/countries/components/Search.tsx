import { BsSearch, BsChevronDown, BsChevronUp } from "react-icons/bs";

export default function Search() {
  return (
    <div className="flex flex-wrap justify-between gap-4">
      <div className="flex h-14 basis-[480px]  items-center justify-start gap-4 rounded bg-header px-8 shadow-sm dark:bg-header-dark ">
        <BsSearch className=" fill-input-text dark:fill-input-text-dark " />
        <input
          className="flex-1 bg-inherit "
          placeholder="Search for a country ..."
          type="text"
        />
      </div>
      <div>
        <p className="flex h-14 w-48 cursor-pointer items-center justify-between bg-header px-8 text-sm dark:bg-header-dark">
          Filter by Region <BsChevronDown />
        </p>
        <ul className="hidden bg-header dark:bg-header-dark">
          <li>Africa</li>
          <li>America</li>
          <li>Asia</li>
          <li>Europe</li>
          <li>Oceania</li>
        </ul>
      </div>
    </div>
  );
}
