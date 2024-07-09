"use client";

import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel"; // Import the missing component
import Footer from "../components/Footer";
import Layout from "../components/Layout";

export default function Home() {
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
        "Solid",
        "ZK sandbox",
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
        "Bitrise",
      ],
    },
  ];

  const projects = [
    {
      title: "The Startup",
      img: "/projects/theStartup.png",
      description:
        " I have been working on the migration, restructuring, and redesign of the YourEcosystem platform built in Laravel, to new mulI have been working on the migration, restructuring, and redesign of the YourEcosystem platform built in Laravel, to new mul I have been working on the migration, restructuring, and redesign of the YourEcosystem platform built in Laravel, to new multi-tenancy technology with nest js as the backend and incorporating components with react in the frontend. Using docker for development and deployed on an EC2 server. /nDuring the migration a restructuring of the database is implemented, as well as we incorporate improvements in the security and performance of the API, with the implementation of decorators such as JWTGuards, we also incorporate swagger for the documentation of our API.",
    },
    {
      title: "Wendy CMS",
      img: "/projects/wendy.png",
      description:
        "My responsibilities within the project were the configuration and implementation of the AWS S3 service to store multimedia from the CMS made with Strapi, to later use it in the frontend, as well as contribute to the deployment of the application through an ECS cluster",
    },
    {
      title: "Materially",
      img: "/projects/materially.png",
      description:
        "My responsibilities in this project were to create a mobile application built in react-native, and implement real time through web socket (apollo client) and push notifications. Also, incorporate a geolocation service with the Google API. I also worked on the implementation of Sentry to capture and log errors, and the implementation of internationalization with I18n, among other features. Technologies employed: React Native, React, Hooks, TypeScript, Eslint with Airbnb, Sentry, Jest, Git, GitHub actions, VSCode, Sass.",
    },
    {
      title: "Dealer connect",
      img: "/projects/dealer.png",
      description:
        "The project involved integrating multiple APIs, implementing complex business logic, and ensuring seamless user experience across different devices and browsers. One of the major obstacles we faced was dealing with inconsistent data from third-party APIs. To overcome this, we implemented robust error handling and data validation mechanisms to detect and handle such cases gracefully. Technologies employed: Vue, Vuex, TypeScript, Eslint, Nest js Git, GitHub actions, VSCode, Docker.",
    },
  ];

  return (
    <Layout>
      <section id="Profile">
        <div className="justify-center mt-12">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 items-center justify-center">
            <div className="rounded-lg grid place-items-center">
              <img
                className="rounded-full"
                src="/profile.png"
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
            <h1 className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-xl lg:text-3xl">
              About me{" "}
            </h1>
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
          <h1 className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-xl lg:text-3xl">
            My Skills{" "}
          </h1>
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
          <h1 className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-xl lg:text-3xl">
            Feature projects
          </h1>
          <br />
          <Carousel items={projects} />
        </div>
      </section>

      {/* <section id="Services">
          <div className="items-center justify-center m-10">
            <h1>Services</h1>
          </div>
        </section> */}
      {/* <section id="Hobbies"></section> */}
    </Layout>
  );
}
