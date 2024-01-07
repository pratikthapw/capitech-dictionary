import Image from "next/image";
import MaxWidth from "@/components/reusables/MaxWidth";
import searchIcon from "../public/search-icon.svg";
import { useContext, useState } from "react";
import { SearchContext } from "@/store/SearchContext";
import DictionaryContent from "@/components/DictionaryContent";
import Footer from "@/components/ui/Footer";

function Home() {
  const [inputValue, setInputValue] = useState<string>("");
  const [emptyValue, setEmptyValue] = useState<boolean>(false);
  const { setSearchValue, searchValue } = useContext(SearchContext);

  function handleSubmit(e: any) {
    e.preventDefault();
    if (inputValue !== "") {
      setSearchValue(inputValue);
      setEmptyValue(false);
    } else {
      setEmptyValue(true);
    }
  }
  return (
    <>
      <MaxWidth className="space-y-12">
        <main className="space-y-8">
          <form
            onSubmit={handleSubmit}
            className="flex gap-x-2 items-center justify-between bg-slate-200 pl-2 h-12 rounded-lg"
          >
            <Image src={searchIcon} alt="logo" height={20} width={20} />
            <input
              value={inputValue}
              onChange={(e) => setInputValue(() => e.target.value)}
              type="text"
              placeholder="Search Words"
              className="focus:outline-none bg-transparent h-full w-full"
            />
            <button
              type="submit"
              className="bg-blue-600 h-full px-6 rounded-lg text-slate-50 font-semibold"
            >
              Search
            </button>
          </form>
          {emptyValue ? (
            <span className="text-xs text-red-400 font-sans">
              Please Fill up some words
            </span>
          ) : null}

          <DictionaryContent />
        </main>
        <footer className="pt-12">
          <Footer searchValue={searchValue} />
        </footer>
      </MaxWidth>
    </>
  );
}

export default Home;
