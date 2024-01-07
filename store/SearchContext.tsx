import React, { createContext, useEffect, useState } from "react";

export const SearchContext = createContext({
  searchValue: "",
  setSearchValue: (value: string) => {},
  dictionaryOutput: [
    {
      word: "",
      phonetic: "",
      phonetics: [
        {
          text: "",
          audio: "",
          sourceUrl: "",
          license: {
            name: "",
            url: "",
          },
        },
      ],
      meanings: [
        {
          partOfSpeech: "",
          definitions: [
            {
              definition: "",
              synonyms: [],
              antonyms: [],
            },
          ],
        },
      ],
    },
  ],
  error: "",
  isLoading: false,
});

function SearchProvider({ children }: { children: React.ReactNode }) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [dictionaryOutput, setDictionaryOutput] = useState<any>([]);
  const [error, setError] = useState<any>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const API_URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(API_URL);
        const data = await res.json();
        setDictionaryOutput(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else if (typeof err === "string") {
          setError(err);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchValue]);
  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
        dictionaryOutput,
        error,
        isLoading,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export default SearchProvider;
