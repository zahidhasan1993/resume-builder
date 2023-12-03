const Resume = ({
  basicInfo,
  workData,
  projectData,
  educationData,
  achievementData,
  summeryData,
  otherData,
  color,
}) => {
  console.log(projectData);
  return (
    <div className="text-gray-800 font-sans leading-normal tracking-normal p-10 w-full">
      <div className="container mx-auto md:px-20 px-4 py-12 w-full">
        <div className="mb-20 md:flex md:justify-between pb-10 border-b-8 border-black">
          <div>
            <h1 className="text-8xl  mb-5 font-agbalumo">{basicInfo.name}</h1>
            <h1 className="text-2xl" style={{ color: color }}>
              {basicInfo.title}
            </h1>
          </div>
          <div className="space-y-3">
            <p className="text-xl">Phone: {basicInfo.phone}</p>
            <p className="text-xl">Email: {basicInfo.email}</p>
            <p className="text-xl">
              Github:{" "}
              <a
                href={basicInfo.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span style={{ color: color }}>{basicInfo.github}</span>
              </a>
            </p>
            <p className="text-xl">
              Portfolio:{" "}
              <a
                href={basicInfo.portfolio}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span style={{ color: color }}>{basicInfo.portfolio}</span>
              </a>
            </p>
          </div>
        </div>
        <div className="mb-8 w-full">
          <h2 className="text-4xl font-bold mb-4" style={{ color: color }}>
            About Me
          </h2>
          <p className="text-xl">{summeryData.summery}</p>
        </div>
        <div className="my-28 md:flex md:justify-between md:gap-24">
          <div className="space-y-20 p-5 border-r-4 border-black pr-32">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-2" style={{ color: color }}>
                Education
              </h2>
              <p className="text-xl font-semibold">
                {educationData.instituteName}
              </p>
              <p>
                {educationData.title} ({educationData.startDate} -{" "}
                {educationData.endDate})
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-2" style={{ color: color }}>
                Work Experience
              </h2>
              <p className="font-semibold mb-3">
                Position: {workData.workTitle}
              </p>
              <p>
                Company:{" "}
                <span style={{ color: color }}>
                  {workData.companyName} ({workData.startDate} -{" "}
                  {workData.endDate})
                </span>
              </p>
              <p className="text-md mt-5">{workData.workDetails}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-2" style={{ color: color }}>
                Achievements
              </h2>
              <ul className="list-disc list-inside">
                <li className="text-lg text-cyan-700">
                  {achievementData.ach1}
                </li>
                <li className="text-lg text-cyan-700">
                  {achievementData.ach2}
                </li>
                <li className="text-lg text-cyan-700">
                  {achievementData.ach3}
                </li>
              </ul>
            </div>
          </div>
          <div className="p-5 space-y-20 ml-10 w-full">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-2" style={{ color: color }}>
                Projects
              </h2>
              <p className="text-xl font-semibold">
                {projectData.projectTitle}
              </p>
              <p className="py-3">
                Main Technologies :{" "}
                <span className="text-cyan-700">{projectData.mainTech}</span>
              </p>
              <p className="text-xl">
                Github : <br />
                <a style={{ color: color }} href={projectData.githubURL}>
                  {projectData.githubURL}
                </a>
              </p>
              <p className="text-xl">
                LiveLink : <br />
                <a style={{ color: color }} href={projectData.liveLink}>
                  {projectData.liveLink}
                </a>
              </p>
              <p className="text-xl my-5 text-gray-700">
                {projectData.projectDescription}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-2" style={{ color: color }}>
                Other Section
              </h2>
              <p className="text-lg">{otherData.other}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
