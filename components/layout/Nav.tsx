import React from "react";
import Image from "next/image";
import Link from "next/link";
import MaxWidth from "../reusables/MaxWidth";
import logo from "../../public/logo.svg";

function Nav() {
  return (
    <MaxWidth>
      <nav className="flex gap-x-2 items-center">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="logo"
            height={48}
            width={48}
            className="border border-black rounded-full"
          />
        </Link>

        <h2 className="text-xl font-semibold">Capitech Dictionary</h2>
      </nav>
    </MaxWidth>
  );
}

export default Nav;
