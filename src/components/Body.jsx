import { AiOutlineDownload } from "react-icons/ai";
import EditorTabs from "./EditorTabs";
import Resume from "./Resume";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import generatePDF from "react-to-pdf";

const Body = () => {
  const targetRef = useRef();

  const [color, setColor] = useState("#E73D19");
  const colors = ["#17ABF5", "#008304", "#044964", "#FC0F00", "#64040D"];
  const [resume, setResume] = useState(false);
  //editor pannels
  const [basicInfo, setBasicInfo] = useState({});
  const [workData, setWorkData] = useState({});
  const [projectData, setProjectData] = useState({});
  const [educationData, setEducationData] = useState({});
  const [achievementData, setAchievementData] = useState({});
  const [summeryData, setSummeryData] = useState({});
  const [otherData, setOtherData] = useState({});

  const handleSubmit = () => {
    setResume(true);
    toast.success(`Resume Created!!!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const getBasicData = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const title = form.title.value;
    const phone = form.phone.value;
    const portfolio = form.portfolio.value;
    const github = form.github.value;
    const linkedin = form.linkedin.value;
    const email = form.email.value;

    const data = {
      fieldTitle: "Basic Info",
      name,
      title,
      phone,
      portfolio,
      github,
      linkedin,
      email,
    };

    setBasicInfo(data);
    toast.success(`${data.fieldTitle} added successfully`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    // console.log(data);
  };
  const getWorkData = (e) => {
    e.preventDefault();
    const form = e.target;
    const workTitle = form.worktitle.value;
    const companyName = form.companyname.value;
    const certificate = form.certificate.value;
    const startDate = form.startdate.value;
    const endDate = form.enddate.value;
    const workDetails = form.workd.value;

    const data = {
      fieldTitle: "Work Experience",
      workTitle,
      companyName,
      certificate,
      startDate,
      endDate,
      workDetails,
    };
    setWorkData(data);
    toast.success(`${data.fieldTitle} added successfully`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const getProjectData = (e) => {
    e.preventDefault();
    const form = e.target;
    const projectTitle = form.protitle.value;
    const mainTech = form.maintech.value;
    const githubURL = form.github.value;
    const liveLink = form.livelink.value;
    const projectDescription = form.projectd.value;

    const data = {
      fieldTitle: "Projects",
      projectTitle,
      mainTech,
      githubURL,
      liveLink,
      projectDescription,
    };

    setProjectData(data);
    toast.success(`${data.fieldTitle} added successfully`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const getEducationData = (e) => {
    e.preventDefault();
    const form = e.target;
    const instituteName = form.institute.value;
    const title = form.title.value;
    const startDate = form.startdate.value;
    const endDate = form.enddate.value;

    const data = {
      fieldTitle: "Educations",
      instituteName,
      title,
      startDate,
      endDate,
    };

    setEducationData(data);
    toast.success(`${data.fieldTitle} added successfully`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const getAchievementData = (e) => {
    e.preventDefault();
    const form = e.target;
    const ach1 = form.ach1.value;
    const ach2 = form.ach2.value;
    const ach3 = form.ach3.value;
    const data = {
      fieldTitle: "Achievement",
      ach1,
      ach2,
      ach3,
    };
    setAchievementData(data);
    toast.success(`${data.fieldTitle} added successfully`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const getSummeryData = (e) => {
    e.preventDefault();
    const form = e.target;
    const summery = form.summery.value;
    const data = {
      fieldTitle: "Summery",
      summery,
    };
    setSummeryData(data);
    toast.success(`${data.fieldTitle} added successfully`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const getOtherData = (e) => {
    e.preventDefault();
    const other = e.target.other.value;
    const data = {
      fieldTitle: "Other",
      other,
    };
    setOtherData(data);
    toast.success(`${data.fieldTitle} added successfully`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  // console.log(
  //   "from basic data:",
  //   basicInfo,
  //   "from work data: ",
  //   workData,
  //   "Projects data:",
  //   projectData,
  //   "education data:",
  //   educationData,
  //   "Achievement Data : ",
  //   achievementData,
  //   "Summery Data :",
  //   summeryData,
  //   "Other Data : ",
  //   otherData
  // );
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
              style={{ backgroundColor: color }}
              onClick={() => setColor(color)}
              className="h-14 w-14 rounded-full bg-red-700 hover:scale-105 duration-100 ease-out"
            ></p>
          ))}
        </div>
        <button
          onClick={() => generatePDF(targetRef, { filename: "resume.pdf" })}
          className="flex justify-center items-center gap-2 text font-agbalumo py-3 px-8 bg-blue-700 text-white rounded-md hover:scale-105 duration-300 ease-linear hover:bg-blue-400"
        >
          Download <AiOutlineDownload className="text-xl"></AiOutlineDownload>
        </button>
      </div>
      <div className="my-20">
        <EditorTabs
          handleSubmit={handleSubmit}
          getBasicData={getBasicData}
          getWorkData={getWorkData}
          getProjectData={getProjectData}
          getEducationData={getEducationData}
          getSummeryData={getSummeryData}
          getAchievementData={getAchievementData}
          getOtherData={getOtherData}
        ></EditorTabs>
      </div>
      {resume ? (
        <div className="my-20" ref={targetRef}>
          <Resume
            basicInfo={basicInfo}
            workData={workData}
            projectData={projectData}
            educationData={educationData}
            achievementData={achievementData}
            summeryData={summeryData}
            otherData={otherData}
            color={color}
          ></Resume>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Body;
