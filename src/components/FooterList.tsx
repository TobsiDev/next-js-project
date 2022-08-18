import Link from "next/link";

const FooterList = ({ showText, linkTo }) => {
  return (
    <>
      <div className="">
        <h2>
          <Link href={linkTo}>
            <a>{showText}</a>
          </Link>
        </h2>
      </div>
    </>
  );
};

export default FooterList;
