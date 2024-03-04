import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Carousel2 from "../components/Carousel"; // Import the missing component

export default function Home() {
  const navBar = ["About", "Skills", "Projects", "Services", "Hobbies", "Blog"];
  const skills = [
    {
      title: "Frontend",
      list: [
        "React",
        "React Native",
        "Redux",
        "Vue",
        "Next js",
        "HTML",
        "SASS",
        "CSS",
        "Material-UI",
        "Tailwind",
        "Storybook",
      ],
    },
    {
      title: "Backend",
      list: [
        "Nest js",
        "Swagger",
        "Node js",
        "Docker",
        "NySql",
        "Jest",
        "GraphQL",
      ],
    },
    {
      title: "Others",
      list: [
        "Git",
        "Github actions",
        "Jira",
        "Postman",
        "Third API",
        "AWS",
        "Digital ocean",
        " Bitrise",
      ],
    },
  ];

  return (
    <main className="">
      <Navbar items={navBar} />
      <div className="flex flex-col justify-center w-3/4 absolute left-1/2 transform -translate-x-1/2">
        <section id="Profile">
          <div className="justify-center mt-6">
            <div className="flex items-center justify-center">
              <div className="flex flex-col">
                <img
                  className="rounded-full"
                  src="https://media.licdn.com/dms/image/C5603AQGA6_wMM8naLw/profile-displayphoto-shrink_800_800/0/1626803153141?e=1714608000&v=beta&t=tp5aA_vGVps9pTTOP9yJupXfan5lmbv39Krwdd70QcA"
                  width={200}
                  height={200}
                />
                <a
                  className="text-white italic text-s bg-blue-500 hover:bg-blue-700 rounded-full mt-5 py-2 text-center"
                  href={"https://www.buymeacoffee.com/lidiacanales"}
                  target="_blank"
                >
                  Support me 💃!
                </a>
              </div>
              <div className="flex flex-col items-center justify-center m-10">
                <div className="flex">
                  <p className="">
                    My name is{" "}
                    <span className="animated-gradient text-2xl">
                      Lidia Canales
                    </span>
                  </p>
                </div>
                <span>Full-Stack Software Engineer</span>
                <div className="flex items-center justify-center m-10 w-80 justify-around">
                  <div className="rounded-full bg-white w-20 h-20 text-zinc-800 flex flex-col justify-center items-center">
                    <h2 className="text-neutral-500 font-bold">+6</h2>
                    <h3 className="text-blue-900">Years</h3>
                  </div>
                  <div className="rounded-full bg-white w-20 h-20 text-zinc-800 flex flex-col justify-center items-center">
                    <h2 className="text-neutral-500 font-bold">+70</h2>
                    <h3 className="text-blue-900">Projects</h3>
                  </div>{" "}
                  <div className="rounded-full bg-white w-20 h-20 text-zinc-800 flex flex-col justify-center items-center">
                    <h2 className="text-neutral-500 font-bold">$25</h2>
                    <h3 className="text-blue-900">Per Hour</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="items-center justify-center m-10">
              <h1>About me </h1>
              <p>
                A results-driven software engineer with 6 years of experience
                designing, developing, and implementing software solutions.
                Passionate about writing clear and efficient code that delivers
                high performance. Skilled in using various development tools to
                improve the developer experience and streamline the software
                development process.
              </p>
              <div className="flex items-center justify-center space-x-14 m-10">
                <a
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  href="https://www.linkedin.com/in/lidia-canales/"
                  target="_blank"
                >
                  Contact Me
                </a>
                <a
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  href="https://download2260.mediafire.com/hrez5pecob4gAdByvveBDVxiYzqP9_tUtsdQnN5-27KOqACwfwNhUEbuehRsFbi8mjyANzKsONwglgZo55IMcIVKaNZbdEVoGoqfpYd-Ju3OdUnWM6cVwCAzTuwT53nWrsRHtT3B1X0c5RFesfjwuD4IdNl9zEjAltvISX3CG6C3/iw4jgeh4omjzsh8/CV+Lidia+Canales-2024.pdf"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="Skills">
          <div className="items-center justify-center m-10">
            <h1>My Skills </h1>
            {/* <Carousel2 items={skills} /> */}
            <div className="flex flex-row items-center justify-center space-x-14">
              {skills.map((item, index) => (
                <Card key={index} title={item.title} list={item.list} />
              ))}
            </div>
          </div>
        </section>
        <section id="Projects">
          <div className="items-center justify-center m-10">
            <h1>Feature projects</h1>
            <Carousel2 items={skills} />
          </div>
        </section>
        <section id="Services">
          <div className="items-center justify-center m-10">
            <h1>Services</h1>
          </div>
        </section>
        <section id="Hobbies"></section>
      </div>
    </main>
  );
}
