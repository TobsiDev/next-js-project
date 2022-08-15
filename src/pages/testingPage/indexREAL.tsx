import { NextPage } from "next";

const Album: NextPage = () => {
  return (
    <div>
      <div className=" h-screen bg-blue-900 ">
        <h1 className=" self-center text-center">Album page</h1>
        <div className="mt-80 flex-auto bg-amber-300">
          <div className="mx-auto max-w-3xl bg-lime-800 text-center">
            <h2>
              Magnus din kæmpe ostemad. Tror du virkelig jeg vil skrive sådan
              noget om den fantastiske udvikler der har lavet denne fantastiske
              hjemmeside? Nah, du er en brosten, ja, ja og du er en
              negleklipper. Jaa, der fik du tørt på.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;
