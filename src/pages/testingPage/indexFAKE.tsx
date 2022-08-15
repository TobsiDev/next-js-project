import { NextPage } from "next";

const Album: NextPage = () => {
  return (
    <div>
      <div className=" h-screen bg-red-700 ">
        <h1 className=" self-center text-center">Album page</h1>
        <div className="mx-auto h-80 w-20 bg-white text-white">
          <h1> a</h1>
        </div>
        <div className=" bg-white text-white">
          <div className="mx-auto h-20 bg-white text-center">
            <h2>
              Magnus din kæmpe ostemad. Tror du virkelig jeg vil skrive sådan
              noget om den fantastiske udvikler der har lavet denne fantastiske
              hjemmeside? Nah, du er en brosten, ja, ja og du er en
              negleklipper. Jaa, der fik du tørt på.
            </h2>
          </div>
        </div>
        <div className="mx-auto h-80 w-20 bg-white text-white">
          <h1> a</h1>
        </div>
      </div>
    </div>
  );
};

export default Album;
