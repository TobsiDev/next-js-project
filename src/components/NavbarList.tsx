import Link from "next/link";

const NavbarList = ({ showText, linkTo }) => {
  return (
    <>
      <h2 className="mx-1.5">
        <Link href={linkTo}>
          <a>{showText}</a>
        </Link>
      </h2>
    </>
  );
};

export default NavbarList;
