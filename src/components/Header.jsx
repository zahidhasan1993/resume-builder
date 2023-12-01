import img from "../assets/headers/undraw_resume_folder_re_e0bi.svg";
const Header = () => {
  return (
    <div className="p-5 md:p-32 bg-cyan-100 bg-opacity-70">
      <div className="md:flex md:gap-20 w-full">
        <div className="md:w-2/3 md:pt-28">
          <h1 className="text-6xl font-agbalumo text-gray-600">
            Create a <span className="text-blue-400">Resume</span> that{" "}
            <span className="text-blue-400">Gets</span> You Notic<span className="text-blue-400">ed!</span>{" "}
          </h1>
          <p className="mt-10 text-gray-600 font-smooch text-xl">
            In todays competitive job market, a well-crafted resume is your key
            to unlocking opportunities and showcasing your true potential. Our
            intuitive resume builder empowers you to create a compelling
            narrative that highlights your skills, experience, and
            accomplishments, effectively capturing the attention of potential
            employers
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={img}
            alt="resumeImg"
            className="h-[35rem] rounded-xl opacity-80 hover:scale-105 duration-300 ease-linear hover:opacity-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
