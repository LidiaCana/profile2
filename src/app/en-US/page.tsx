import Navbar from "../components/Navbar";

export default function Home() {
  const navBar = ["About", "Skills", "Projects", "Services", "Hobbies", "Blog"];
  return (
    <main className="">
      <Navbar items={navBar} />
      <section id="Profile">
        <div className="justify-center mt-6">
          <div className="flex items-center justify-center">
            <img
              className="rounded-full"
              src="https://media.licdn.com/dms/image/C5603AQGA6_wMM8naLw/profile-displayphoto-shrink_800_800/0/1626803153141?e=1714608000&v=beta&t=tp5aA_vGVps9pTTOP9yJupXfan5lmbv39Krwdd70QcA"
              width={200}
              height={200}
            />
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
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Contact Me
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Download CV
            </button>
            <a
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              href={"https://www.buymeacoffee.com/lidiacanales"}
              target="_blank"
            >
              Support me!
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
