import { AiOutlineDownload } from "react-icons/ai";
import EditorTabs from "./EditorTabs";

const Body = () => {
    const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  return (
    <div className="my-5 md:my-24">
      <h1 className="text-center bg- font-smooch text-3xl md:text-6xl underline text-gray-700">
        Build Your Resume
      </h1>
      <div className="mt-20 md:flex md:justify-between px-10">
        <div className="flex gap-1 mb-5 md:mb-0">
        {colors.map((color) => (
          <p
            key={color}
            style={{backgroundColor: color}}
            className='h-14 w-14 rounded-full bg-red-700'
          ></p>
        ))}
        </div>
        <button className="flex justify-center items-center gap-2 text font-agbalumo py-3 px-8 bg-blue-700 text-white rounded-md hover:scale-105 duration-300 ease-linear hover:bg-blue-400">Download <AiOutlineDownload className="text-xl"></AiOutlineDownload></button>
      </div>
      <div className="my-20">
        <EditorTabs></EditorTabs>
      </div>
    </div>
  );
};

export default Body;
