import FooterList from "./FooterList";

const Footer = () => {
  return (
    <div className=" mt-auto min-h-full bg-slate-800 align-middle">
      <h2 className=" text-center">By Tobsi 2022</h2>

      <div className="flex">
        <div className="ml-2" />
        <div className="flex flex-1 bg-zinc-900 bg-opacity-40 shadow-inner">
          <div className="flex-1" />
          <div>
            <FooterList showText="About" linkTo="" />
            <FooterList showText="Location" linkTo="" />
          </div>
          <div className="flex-1" />
          <div>
            <FooterList showText="Vacation" linkTo="" />
            <FooterList showText="Idk" linkTo="" />
          </div>
          <div className="flex-1" />
          <div>
            <FooterList showText="Job" linkTo="" />
            <FooterList showText="Visit" linkTo="" />
          </div>
          <div className="flex-1" />
        </div>
        <div className="mr-2" />
      </div>
    </div>
  );
};

export default Footer;
