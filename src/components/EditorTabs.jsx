import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const EditorTabs = () => {
  const [basicInfo, setBasicInfo] = useState({});
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
//   console.log("from main log",basicInfo.name);
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
          <TabPanel className="md:mx-44">
            <h1 className="text-center underline font-agbalumo mb-10 text-2xl font-bold">
              Basic Info
            </h1>

            <div className="max-w-2xl mx-auto bg-white p-16">
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
          </TabPanel>
          <TabPanel>
            <h1>Work Experience</h1>
          </TabPanel>
          <TabPanel>
            <h1>Projects</h1>
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
