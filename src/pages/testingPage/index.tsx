import { NextPage } from "next";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Album: NextPage = () => {
  return (
    <div className=" flex h-auto min-h-screen flex-col bg-indigo-900 ">
      <Navbar />
      <h1 className=" self-center text-center">Header</h1>
      <div className="my-auto py-10 ">
        <div
          className="mx-auto max-w-3xl rounded-md bg-slate-900 
          bg-opacity-40 py-8 text-center shadow-inner drop-shadow-lg"
        >
          <h2 className=" text-opacity-0">Site is under development.</h2>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default Album;
