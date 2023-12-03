import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const EditorTabs = ({
  getAchievementData,
  getBasicData,
  getEducationData,
  getOtherData,
  getProjectData,
  getSummeryData,
  getWorkData,
  handleSubmit,
}) => {
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
        <div className="mt-20 p-5 md:p-20">
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
          <TabPanel className="md:mx-44">
            <div className="border rounded-lg shadow-2xl md:p-10">
              <h1 className="text-center underline font-agbalumo mb-10 text-2xl font-bold">
                Work Experience
              </h1>

              <div className="max-w-2xl mx-auto bg-white p-5 md:p-10">
                <form onSubmit={getWorkData}>
                  <div className="grid gap-6 mb-6 md:grid-cols-2">
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
          <TabPanel className="md:mx-44">
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
          {/* Educational panel */}
          <TabPanel className="md:mx-44">
            <div className="border rounded-lg shadow-2xl md:p-10">
              <h1 className="text-center underline font-agbalumo mb-10 text-2xl font-bold">
                Educations
              </h1>

              <div className="max-w-2xl mx-auto bg-white p-5 md:p-10">
                <form onSubmit={getEducationData}>
                  <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    <div className="col-span-2">
                      <label
                        htmlFor="lastGraduation"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Institute Name
                      </label>
                      <input
                        type="text"
                        name="institute"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Institute Name"
                        required
                      />
                    </div>
                    <div className="col-span-2">
                      <label
                        htmlFor="title"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Ex: Bsc In CSE"
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
          {/* achievement tab panel  */}
          <TabPanel className="md:mx-44">
            <div className="border rounded-lg shadow-2xl md:p-10">
              <h1 className="text-center underline font-agbalumo mb-10 text-2xl font-bold">
                Achievemnets
              </h1>

              <div className="max-w-2xl mx-auto bg-white p-5 md:p-10">
                <form onSubmit={getAchievementData}>
                  <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    <div className="col-span-2">
                      <label
                        htmlFor="achievement1"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Achievement1
                      </label>
                      <input
                        type="text"
                        name="ach1"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter your achievement"
                        required
                      />
                    </div>
                    <div className="col-span-2">
                      <label
                        htmlFor="achievement2"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Achievement2
                      </label>
                      <input
                        type="text"
                        name="ach2"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter your achievement"
                      />
                    </div>
                    <div className="col-span-2">
                      <label
                        htmlFor="achievement3"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Achievement3
                      </label>
                      <input
                        type="text"
                        name="ach3"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter your achievement"
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
          {/* summery panel */}
          <TabPanel className="md:mx-44">
            <div className="border rounded-lg shadow-2xl md:p-10">
              <h1 className="text-center underline font-agbalumo mb-10 text-2xl font-bold">
                Summery
              </h1>

              <div className="max-w-2xl mx-auto bg-white p-5 md:p-10">
                <form onSubmit={getSummeryData}>
                  <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    <div className="col-span-2">
                      <label
                        htmlFor="summery"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Summery
                      </label>
                      <textarea
                        name="summery"
                        className="w-full border border-black p-2 resize-none"
                        cols="30"
                        rows="10"
                        placeholder="Write about yourself"
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
          {/* other tab panel */}
          <TabPanel className="md:mx-44">
            <div className="border rounded-lg shadow-2xl md:p-10">
              <h1 className="text-center underline font-agbalumo mb-10 text-2xl font-bold">
                Other
              </h1>

              <div className="max-w-2xl mx-auto bg-white p-5 md:p-10">
                <form onSubmit={getOtherData}>
                  <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    <div className="col-span-2">
                      <label
                        htmlFor="other"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Other
                      </label>
                      <textarea
                        name="other"
                        className="w-full border border-black p-2 resize-none"
                        cols="30"
                        rows="10"
                        placeholder="Write about yourself"
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
                <div className="text-center">
                  <button
                    onClick={handleSubmit}
                    className="my-10 text-center bg-black text-white py-3 px-10 rounded-xl hover:scale-105 hover:bg-gray-300 hover:text-black hover:font-bold duration-300 ease-linear "
                  >
                    Genarate Resume
                  </button>
                </div>
              </div>
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default EditorTabs;
