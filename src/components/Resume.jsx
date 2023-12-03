const Resume = () => {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans leading-normal tracking-normal p-10">
      <div className="container mx-auto md:px-20 px-4 py-8">
        <div className="mb-8 md:flex md:justify-between pb-10 border-b-8 border-black">
          <div>
            <h1 className="text-6xl  mb-5 font-agbalumo">Your Name</h1>
            <h1 className="text-xl">Your Title</h1>
          </div>
          <div>
            <p className="text-lg">Phone: (123) 456-7890</p>
            <p className="text-lg">Email: your.email@example.com</p>
            <p className="text-lg">
              GitHub:{" "}
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/yourusername
              </a>
            </p>
            <p className="text-lg">
              Portfolio:{" "}
              <a
                href="https://yourportfolio.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                yourportfolio.com
              </a>
            </p>
          </div>
        </div>
        <div className="mb-8 w-full">
          <h2 className="text-2xl font-bold mb-2">About Me</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            repellat ea labore, debitis culpa esse, itaque praesentium iste cum
            eius mollitia, dolorum ratione aliquam adipisci. Veniam earum eos
            fugiat dolores, nobis cum libero deserunt provident porro odio saepe
            maxime dignissimos, reprehenderit facilis temporibus! Fugit
            perspiciatis quidem voluptate aliquid, error voluptatum quas ducimus
            dolore fugiat, adipisci expedita tempora ipsam sequi natus quis
            praesentium vitae. Laborum dolor repellendus quae quis minima
            voluptatum ipsam sunt non modi porro, dolorum quasi dolorem unde?
            Nisi, similique magnam nihil asperiores ipsam, rem saepe sit tenetur
            vitae illum veritatis explicabo, reprehenderit sint! Consequatur
            quas laudantium earum ratione?
          </p>
        </div>
        <div className="my-28 md:grid md:grid-cols-3 md:gap-24">
          <div className="space-y-20 p-5 border-r-4 border-black">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Education</h2>
              <p className="text-lg font-semibold">
                Degree, University, Graduation Year
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Work Experience</h2>
              <p className="text-lg font-semibold">
                Job Title, Company, Duration
              </p>
              <p className="text-lg">
                Responsibilities and achievements in the role.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Achievements</h2>
              <ul className="list-disc list-inside">
                <li className="text-lg">Achievement 1</li>
                <li className="text-lg">Achievement 2</li>
              </ul>
            </div>
          </div>
          <div className="p-5 md:gird md:grid-cols-2 space-y-20">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Projects</h2>
              <p className="text-lg font-semibold">Project Title, Duration</p>
              <p className="text-lg">
                Project description and your role in it.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Other Section</h2>
              <p className="text-lg">Content of the other section.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
