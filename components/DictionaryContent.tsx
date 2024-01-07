import React, { useContext, useRef, useState } from "react";
import Image from "next/image";
import { SearchContext } from "@/store/SearchContext";
import pause from "../public/play.svg";
import play from "../public/pause.svg";
import Tabs from "./reusables/Tabs";
import MaxWidth from "./reusables/MaxWidth";
import Skeleton from "./ui/Skeleton";

function DictionaryContent() {
  const { dictionaryOutput, error, isLoading, searchValue } =
    useContext(SearchContext);
  const audioLink = dictionaryOutput?.[0]?.phonetics?.find(
    (item: any) => item.audio !== ""
  );
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  function handlePlay() {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }
  if (isLoading) {
    return <Loading />;
  }

  if (!dictionaryOutput.length) {
    return (
      <div className="border-2 rounded-md p-4 h-60 space-y-4">
        <p>No data is fetched or error occurred.</p>
        <p>Please try again searching valid word...</p>
      </div>
    );
  }

  return (
    <MaxWidth className="max-w-screen-md space-y-4 border-2 rounded-md p-4">
      <div className="flex gap-x-2 items-center">
        <audio
          ref={audioRef}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={audioLink?.audio} type="audio/mpeg" />
        </audio>
        <Image
          onClick={handlePlay}
          src={isPlaying ? play : pause}
          alt="play button"
          width={32}
          height={32}
          className="cursor-pointer"
        />
        <p>{dictionaryOutput?.[0]?.phonetic}</p>
      </div>
      <Tabs dictionaryOutput={dictionaryOutput} error={error} />
    </MaxWidth>
  );
}

function Loading() {
  return (
    <MaxWidth className="space-y-4 border-2 rounded-md p-4">
      <div className="flex gap-x-2 items-center">
        <Skeleton className="w-6 h-6 rounded-full" />
        <Skeleton className="w-12 h-6 rounded" />
      </div>
      <div className="flex gap-x-2 items-center">
        <Skeleton className="w-20 h-6 rounded" />
        <Skeleton className="w-20 h-6 rounded" />
      </div>
      <Skeleton className="w-full h-8 rounded" />
      <Skeleton className="w-full h-8 rounded" />
      <Skeleton className="w-full h-8 rounded" />
    </MaxWidth>
  );
}
export default DictionaryContent;
