import DictionaryContent from "@/components/DictionaryContent";
import MaxWidth from "@/components/reusables/MaxWidth";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Selected() {
  const router = useRouter();

  return (
    <MaxWidth className="space-y-4">
      <button>
        <Link
          href="/"
          className="hover:bg-blue-300 border border-blue-400 px-2 py-1 rounded-md hover:text-slate-50 font-bold"
        >
          &lt;
        </Link>{" "}
        Back to Home
      </button>
      <p className="capitalize">Word: {router.query.selected}</p>
      <DictionaryContent />
    </MaxWidth>
  );
}

export default Selected;
