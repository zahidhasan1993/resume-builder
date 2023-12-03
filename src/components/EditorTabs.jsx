import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const EditorTabs = () => {
  const [basicInfo, setBasicInfo] = useState({});
  const [workData, setWorkData] = useState({});
  const [projectData, setProjectData] = useState({});
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
  };
  console.log(
    "from basic data:",
    basicInfo,
    "from work data: ",
    workData,
    "Projects data:",
    projectData
  );
  return (
    <div className="">
      <Tabs>
        <TabList className="text-xl text-center font-agbalumo">
          <Tab>Basic Info</Tab>
          <Tab>Work Experience</Tab>
          <Tab>Projects</Tab>
          <Tab>Educations</Tab>
          <Tab>Achievements</Tab>
          <Tab>Summary</Tab>
          <Tab>Others</Tab>
        </TabList>
        <div className="mt-20">
          {/* tab panel for basic info*/}
          <TabPanel className="md:mx-44">
            <div className="border rounded-lg shadow-2xl p-10">
              <h1 className="text-center underline font-agbalumo mb-10 text-2xl font-bold">
                Basic Info
              </h1>

              <div className="max-w-2xl mx-auto bg-white p-10">
                <form onSubmit={getBasicData}>
                  <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Your name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Your Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Your title"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Phone number
                      </label>
                      <input
                        type="text"
                        name="phone"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="123-45-678"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="website"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Portfolio URL
                      </label>
                      <input
                        type="url"
                        name="portfolio"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="website"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="github"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Github URL
                      </label>
                      <input
                        type="text"
                        name="github"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="github link"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="linkedIn"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        LinkedIn URL
                      </label>
                      <input
                        type="text"
                        name="linkedin"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="john.doe@company.com"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="linkedIn"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="john.doe@company.com"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Save
                  </button>
                </form>
              </div>
            </div>
          </TabPanel>
          {/* tab panel for work experience */}
          <TabPanel>
            <div className="border rounded-lg shadow-2xl p-10">
              <h1 className="text-center underline font-agbalumo mb-10 text-2xl font-bold">
                Work Experience
              </h1>

              <div className="max-w-2xl mx-auto bg-white p-10">
                <form onSubmit={getWorkData}>
                  <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    <div className="col-span-2">
                      <label
                        htmlFor="worktitle"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Work Title
                      </label>
                      <input
                        type="text"
                        name="worktitle"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="ex: frontend developer"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyname"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="company name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="certificate"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Certificate Link
                      </label>
                      <input
                        type="text"
                        name="certificate"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="certificate URL"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="startdate"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Start Date
                      </label>
                      <input
                        type="date"
                        name="startdate"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="enddate"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        End Date
                      </label>
                      <input
                        type="date"
                        name="enddate"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="github link"
                        required
                      />
                    </div>
                    <div className="mb-6 col-span-2">
                      <label
                        htmlFor="workdescription"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Work Description
                      </label>
                      <textarea
                        name="workd"
                        className="w-full border border-black p-2 resize-none"
                        placeholder="your working exprience details"
                        cols="30"
                        rows="7"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Save
                  </button>
                </form>
              </div>
            </div>
          </TabPanel>
          {/* tab panel fot Projects */}
          <TabPanel>
            <div className="border rounded-lg shadow-2xl p-10">
              <h1 className="text-center underline font-agbalumo mb-10 text-2xl font-bold">
                Projects
              </h1>

              <div className="max-w-2xl mx-auto bg-white p-10">
                <form onSubmit={getProjectData}>
                  <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    <div className="col-span-2">
                      <label
                        htmlFor="projecttitle"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Project Title
                      </label>
                      <input
                        type="text"
                        name="protitle"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter your project name"
                        required
                      />
                    </div>
                    <div className="col-span-2">
                      <label
                        htmlFor="maintech"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Main Technology
                      </label>
                      <input
                        type="text"
                        name="maintech"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="ex: html,css,js etc."
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="githublink"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Github Link
                      </label>
                      <input
                        type="text"
                        name="github"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="github URL"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="livelink"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Live Project Link
                      </label>
                      <input
                        type="text"
                        name="livelink"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Live website link"
                        required
                      />
                    </div>

                    <div className="mb-6 col-span-2">
                      <label
                        htmlFor="workdescription"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Project Description
                      </label>
                      <textarea
                        name="projectd"
                        className="w-full border border-black p-2 resize-none"
                        placeholder="your working exprience details"
                        cols="30"
                        rows="7"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Save
                  </button>
                </form>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <h1>Educations</h1>
          </TabPanel>
          <TabPanel>
            <h1>Achivements</h1>
          </TabPanel>
          <TabPanel>
            <h1>Summery</h1>
          </TabPanel>
          <TabPanel>
            <h1>Others</h1>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default EditorTabs;
