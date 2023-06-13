import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="mb-4 text-2xl font-extrabold">
        Introducing Where in the World?
      </h1>
      <p className="mb-4 max-w-2xl">
        Embark on a captivating journey of exploration with{" "}
        <span className="font-semibold italic">Where in the World? </span>
        Our app provides a seamless and immersive experience as you navigate
        through countries across the globe. Discover key information about each
        nation, including population and flag details, all in one convenient
        place. Whether you&apos;re a curious traveler or an avid learner,{" "}
        <span className="font-semibold italic"> Where in the World? </span> is
        your passport to unlocking the fascinating aspects of different
        countries. Enough words, start browsing countries now.
      </p>

      <Link
        className=" inline-block rounded bg-header-dark px-4 py-2 text-text-dark transition-transform hover:scale-95 dark:bg-header dark:text-text"
        href="/countries"
      >
        Start searching
      </Link>
    </>
  );
}
