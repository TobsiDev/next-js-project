import { NextPage } from "next";
import Heade from "./Heade";

const Album: NextPage = () => {
  return (
    <div>
      <Heade />
      <div className=" h-screen bg-blue-900 ">
        <h1 className=" self-center text-center">Header</h1>
        <div className="mt-80 ">
          <div className="mx-auto max-w-3xl rounded-md bg-slate-900 py-8 text-center">
            <h2>
              Site is under development. (TODO: Make this look like a program
              window)
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;
