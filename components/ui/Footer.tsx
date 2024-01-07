import React from "react";
import Image from "next/image";
import largeLogo from "../../public/logo-large.svg";
import twitter from "../../public/twitter.svg";
import Link from "next/link";

function Footer({ searchValue }: { searchValue: string }) {
  return (
    <div className="relative h-48">
      <div className="h-24 w-full rounded-full bg-slate-200 absolute"></div>
      <div className="w-[95%] translate-x-4 h-24 bg-blue-400 rounded-full absolute rotate-[-3deg]"></div>
      <Link href={searchValue}>
        <Image
          src={largeLogo}
          alt="logo large"
          width={120}
          height={120}
          className="absolute top-[-30%] left-16 cursor-pointer"
        />
      </Link>

      <div className="absolute left-[55%] top-2 flex items-center gap-x-2 rotate-[-2deg]">
        <p className="bg-slate-200 px-2 py-1 rounded-xl">
          <Image src={twitter} alt="twitter logo" width={20} height={20} />
        </p>
        <p className="text-xl text-slate-50 font-bold">capitech.nepal</p>
      </div>
      <p className="text-slate-50 absolute left-[43%] rotate-[-2deg] top-12 text-sm">
        Follow us on twiiter for latest update
      </p>
    </div>
  );
}

export default Footer;
