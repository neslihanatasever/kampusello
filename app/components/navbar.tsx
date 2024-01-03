import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";

export const Navbar = () => {
  return (
    <menu className="flex justify-between items-center p-3 px-20 m-5 fixed top-0 container mx-auto z-10 ">
      <img
        className="cursor-pointer"
        src="https://avatars.githubusercontent.com/u/34745911?s=200&v=4"
        alt="Logo"
        style={{ width: "50px", height: "auto", borderRadius: "50%" }}
      />
      <div className="flex gap-10 ">
        <Link className="cursor-pointer" href={""}>Kampüs Nedir?</Link>
        <Link className="cursor-pointer" href={""}>Contributors</Link>
        <Link className="cursor-pointer" href={""}>Documention</Link>
      </div>
    </menu>
  );
};
