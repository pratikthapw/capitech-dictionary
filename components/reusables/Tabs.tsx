import React, { useState } from "react";

function Tabs({ dictionaryOutput, error }: any) {
  const [activeTab, setActiveTab] = useState<"noun" | "verb">("noun");
  const filteredOutput = dictionaryOutput?.filter((item: any) => {
    return item?.meanings?.filter((data: any) => {
      if (data?.partOfSpeech === "noun" || data?.partOfSpeech === "verb") {
        return data;
      }
    });
  });
  console.log(dictionaryOutput);
  const commonClassName = "rounded-sm rounded- px-3 py-1 cursor-pointer";

  return (
    <div className="space-y-4">
      <ul className="flex gap-x-2 items-center text-sm">
        <li
          className={
            activeTab === "noun"
              ? `${commonClassName} bg-black text-slate-50`
              : `${commonClassName} bg-slate-200`
          }
          onClick={() => setActiveTab(() => "noun")}
        >
          noun
        </li>
        <li
          className={
            activeTab === "verb"
              ? `${commonClassName} bg-black text-slate-50`
              : `${commonClassName} bg-slate-200`
          }
          onClick={() => setActiveTab(() => "verb")}
        >
          verb
        </li>
      </ul>

      <ul className="space-y-4">
        {filteredOutput?.[0]?.meanings?.map((item: any) => {
          if (item?.partOfSpeech === activeTab) {
            return item?.definitions
              ?.slice(0, 3)
              ?.map((content: any, index: number) => {
                return <TabContent key={index} {...{ index, content }} />;
              });
          }
        })}
      </ul>
    </div>
  );
}

function TabContent({ index, content }: { index: number; content: any }) {
  return (
    <>
      <li className="flex gap-x-2">
        <span>{index + 1}. </span>
        <span>{content?.definition}</span>
      </li>
    </>
  );
}

export default Tabs;
