import Link from "next/link";
import NavbarList from "./NavbarList";

const Navbar = () => {
  return (
    <div className="bg-slate-900 bg-opacity-50 py-2 text-slate-300">
      <div className="mx-10 flex">
        <h1 className=" text-left">
          <Link href="">
            <a>Header</a>
          </Link>
        </h1>
        <div className="flex-1"></div>
        <div className="flex flex-initial">
          <NavbarList showText="Home" linkTo="" />
          <NavbarList showText="About" linkTo="" />
          <NavbarList showText="Location" linkTo="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
