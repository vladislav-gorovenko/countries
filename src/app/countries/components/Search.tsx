import { BsSearch, BsChevronDown, BsChevronUp } from "react-icons/bs";
import Dropdown from "./Dropdown";

export default function Search() {
  return (
    <div className="flex flex-wrap justify-between gap-4">
      <div className="flex h-14 basis-[480px]  items-center justify-start gap-4 rounded bg-header px-6 shadow-sm dark:bg-header-dark ">
        <BsSearch className=" fill-input-text dark:fill-input-text-dark " />
        <input
          className="flex-1 bg-inherit "
          placeholder="Search for a country ..."
          type="text"
        />
      </div>
      <Dropdown />
    </div>
  );
}
