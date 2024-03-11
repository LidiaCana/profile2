"use client";

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
          <div className="justify-center mt-12">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 items-center justify-center">
              <div className="rounded-lg grid place-items-center">
                <img
                  className="rounded-full"
                  src="https://media.licdn.com/dms/image/C5603AQGA6_wMM8naLw/profile-displayphoto-shrink_800_800/0/1626803153141?e=1714608000&v=beta&t=tp5aA_vGVps9pTTOP9yJupXfan5lmbv39Krwdd70QcA"
                  width={200}
                  height={200}
                />
                <a
                  className="text-white italic text-s bg-blue-500 hover:bg-blue-700 rounded-full mt-5 py-2 px-6 text-center"
                  href={"https://www.buymeacoffee.com/lidiacanales"}
                  target="_blank"
                >
                  Support me 💃!
                </a>
              </div>
              <div className="lg:col-span-2 text-center justify-center ">
                <div className="text-2xl">
                  <p className="">
                    My name is{" "}
                    <span className="animated-gradient text-4xl">
                      Lidia Canales
                    </span>
                  </p>
                </div>
                <span>Full-Stack Software Engineer</span>
                <div className="mx-auto max-w-screen-xl sm:px-3 md:py-4 lg:px-2">
                  <div className="mt-8 sm:mt-12">
                    <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                      <div className="flex flex-col bg-blue-50 px-4 py-8 text-center rounded-full">
                        <dt className="order-last text-lg font-medium text-blue-900">
                          Years of Experience
                        </dt>
                        <dd className="text-neutral-500 font-bold">6</dd>
                      </div>

                      <div className="flex flex-col bg-blue-50 px-4 py-8 text-center rounded-full">
                        <dt className="order-last text-lg font-medium text-blue-900">
                          Projects
                        </dt>

                        <dd className="text-neutral-500 font-bold">+70</dd>
                      </div>

                      <div className="flex flex-col bg-blue-50 px-4 py-8 text-center rounded-full">
                        <dt className="order-last text-lg font-medium text-blue-900">
                          Per Hour
                        </dt>

                        <dd className="text-neutral-500 font-bold">$25</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="items-center justify-center m-10">
              <h1>About me </h1>
              <br />
              <p>
                A results-driven software engineer with 6 years of experience
                designing, developing, and implementing software solutions.
                Passionate about writing clear and efficient code that delivers
                high performance. Skilled in using various development tools to
                improve the developer experience and streamline the software
                development process.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 justify-center m-10">
            <a
              className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 text-center"
              href="https://www.linkedin.com/in/lidia-canales/"
              target="_blank"
            >
              Contact Me
            </a>
            <a
              className="inline-block rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500 text-center"
              href="https://download2260.mediafire.com/hrez5pecob4gAdByvveBDVxiYzqP9_tUtsdQnN5-27KOqACwfwNhUEbuehRsFbi8mjyANzKsONwglgZo55IMcIVKaNZbdEVoGoqfpYd-Ju3OdUnWM6cVwCAzTuwT53nWrsRHtT3B1X0c5RFesfjwuD4IdNl9zEjAltvISX3CG6C3/iw4jgeh4omjzsh8/CV+Lidia+Canales-2024.pdf"
            >
              Download CV
            </a>
          </div>
        </section>

        <section id="Skills">
          <div className="items-center justify-center m-10">
            <h1>My Skills </h1>
            <br />
            <div className=" grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 items-center justify-center">
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
