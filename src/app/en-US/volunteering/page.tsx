import Layout from "@/app/components/Layout";
import { link } from "fs";
import Image from "next/image";
import React from "react";
interface CardProps {
  id: number;
  title: string;
  img: string;
  description: string;
  link: string;
  partner: { label: string; link: string }[];
  align?: "left" | "right";
}
const volunteerData = [
  {
    id: 1,
    title: "Contribu Dev",
    img: "/volunteer/contribu.png",
    link: "https://contribu-nextjs.vercel.app/",
    description:
      "In search of contributing to the development of web3, I have joined the Contribu dev project, which proposes a system for measuring the contributions of the members of a community with an algorithm that encourages members to remain active in the community. My role in this initiative has been organizational and QA.",
    partner: [
      { label: "Ahmed Castro", link: "https://github.com/Turupawn/Turupawn" },
      { label: "Oscar Fonseca", link: "https://github.com/edsphinx" },
    ],
    align: "left",
  },
  {
    id: 2,
    title: "Researcher ZK Sandbox",
    img: "/volunteer/zksandbox.png",
    description:
      "Given the nascent nature of web3 development, many technologies and tools lack sufficient documentation, especially in Spanish. To address this gap, I joined the Filosofía Código challenge to create a Spanish-language tutorial on implementing ZK sandbox with React. I believe that generating such content for the Hispanic community not only attracts more users but also enhances the developer experience. This, in turn, will lead to the creation of more products utilizing this technology. I chose to do a tutorial on this technology because I felt especially identified with its philosophy and values. We believe decentralization is premised on individual rights — without widely accessible encryption, we compromise our ability to choose how we live our lives and earn our livelihoods.",
    link: "https://mirror.xyz/0xe527275DA855C658de60EcA230800458f668194B/zaNEPzGH-EQ909NYmL-KwvzByVDE0PTWQJU-4FKddRk",
    partner: [
      { label: "Ahmed Castro", link: "https://github.com/Turupawn/Turupawn" },
    ],
    align: "right",
  },
  {
    id: 3,
    title: "Speaker at CodeSpark",
    img: "/volunteer/codespark.jpg",
    link: "https://www.facebook.com/100063855361043/posts/2425872444351186/",
    description:
      "One of the things I enjoy most in my life is helping and inspiring other people to get ahead, to build things, to make technology a way of life. This desire to help and inspire (especially to bring technology to other women) has motivated me to sign up to be a speaker at technological events in my country. The conferences that I have developed have been both addressing technical issues and social issues. I believe that to stand out and be a good professional in this field, each team member must lead the continuous improvement of both soft skills and hard skills. Being involved and promoting these types of technological events helps us have a more united community and train better professionals in our field, as well as attract young talent to get involved in this market.",
    partner: [{ label: "Code Exitos", link: "https://codexitos.com/" }],
    align: "left",
  },
  {
    id: 4,
    title: "Workshop at Leadership Mission International",
    img: "/volunteer/lmi.png",
    link: "https://www.linkedin.com/company/leadership-mission-international/",
    description:
      "One of my main values ​​as a person is to help young people to generate opportunities for professional growth. Therefore, I have carried out many workshops in order to teach teenagers about the opportunities in the technological world. I have focused a lot on girls and adolescents with a low economic level. Among the most recent workshops that I have carried out, I can mention Introduction to web2, web application development. Taught for the girls of the Leadership Mission International institution. One of the most notable challenges of this adventure was that the institution is located between the mountains and transportation there was not easy. It was also challenging to work with all the girls since many of them did not have a personal computer. However, with everyone's help we managed to complete the workshop and many of them showed an interest in continuing their studies in similar careers.",
    partner: [
      {
        label: "Leadership Mission International",
        link: "https://www.linkedin.com/company/leadership-mission-international/",
      },
    ],
    align: "right",
  },
  {
    id: 5,
    title: "Founder of GeekGirls Latam HN",
    img: "/volunteer/ggl.png",
    link: "https://geekgirlslatam.org/nodos/",
    description:
      "I founded the Geek Girls Latam organization because, as a woman in the technology field, I have experienced firsthand both the challenges and opportunities that exist in this sector. Throughout my career, I have faced barriers and stereotypes that hinder the access and professional development of women in STEAM (Science, Technology, Engineering, Art and Mathematics) areas. Geek Girls Latam was born from the conviction that it is crucial to empower girls and women with the skills and knowledge necessary to thrive in these fields. Our mission is to foster inclusion and diversity by providing resources, mentoring and support to those who wish to explore and develop their capabilities in STEAM. In doing so, we hope to not only close the gender gap, but also inspire a new generation of innovators and leaders in technology.",
    partner: [
      { label: "GeekGirls Latam", link: "https://geekgirlslatam.org/" },
    ],
    align: "left",
  },
  {
    id: 6,
    title: "President 2019 Chamber Junior International",
    img: "/volunteer/jci.png",
    link: "https://www.jci.org/",
    description:
      "In 2019, I had the honor of serving as the president of the Junior Chamber International, a non-profit organization dedicated to providing development opportunities that prepare young leaders to create positive change. During my presidency, I led a series of environmental and socio-economic projects that impacted more than 800 people. This experience allowed me to apply my leadership and management skills in various contexts, promoting initiatives that not only benefited our community but also contributed to sustainable development and social well-being. The opportunity to work with a committed team and see the tangible results of our efforts was immensely rewarding and reinforced my belief in the importance of collaboration and youth leadership in generating significant change.",
    partner: [
      { label: "JCI Honduras", link: "https://www.jci.org/" },
      { label: "UTH", link: "https://www.uth.hn/" },
      {
        label: "Gerencia ambiental",
        link: "https://www.facebook.com/GerenciaDeAmbienteSps/",
      },
    ],
    align: "right",
  },
] satisfies CardProps[];
const Card = ({
  title,
  img,
  description,
  link,
  partner,
  id,
  align,
}: CardProps): React.ReactElement => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 m-10">
      {align === "left" && (
        <div className="flex justify-center items-center">
          <Image src={img} alt={title} width={430} height={430} />
        </div>
      )}
      <div className="col-span-2">
        <div className="my-5">
          <h2 className="text-xl">{title}</h2>
          <a
            href={link}
            className="mt-10 text-sky-400 w-50 block overflow-hidden text-ellipsis whitespace-nowrap"
          >
            {link}
          </a>
        </div>
        <div className=" ">
          <a href={link}>{description}</a>
        </div>
        <div className="mt-10">
          Partners and Alliances:
          <ul className="flex justify-between">
            {partner.map((p, index: number) => (
              <li key={`list-${index}`} className="flex-1 text-center py-8">
                <a
                  href={p.link}
                  className="bg-indigo-600 py-3 px-5 mx-5 rounded-lg w-50 block overflow-hidden text-ellipsis whitespace-nowrap"
                >
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {align === "right" && (
        <div className="flex justify-center items-center">
          <Image src={img} alt={title} width={430} height={430} />
        </div>
      )}
    </div>
  );
};

const VolunteeringPage = () => {
  return (
    <Layout>
      <section id="volunteering">
        <div className="items-center justify-center m-10">
          <h1 className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-xl lg:text-3xl">
            Why is volunteering important to me?
          </h1>
          <br />
          <p>
            Volunteering is incredibly important to me because I have
            experienced firsthand the impact of community support and
            generosity. I was able to complete my bachelors degree thanks to the
            economic and emotional support of various individuals and
            organizations.{" "}
          </p>
          <br />
          <p>
            Coming from a large family that faced significant hardships after my
            father passed away, we often struggled financially, to the point
            where we sometimes did not have enough money for food. Despite these
            challenges, I was fortunate enough to continue my education with the
            help of a scholarship.
          </p>
          <br />
          <p>
            Given the profound support I received during such a difficult time,
            I feel deeply compelled to give back to society and my community.
            Volunteering allows me to pay forward the kindness and assistance I
            was given, and to help others who are facing their own struggles. It
            is a way to express my gratitude and contribute to creating positive
            change for others in need.
          </p>
          <br />
          <h2 className="mb-4 text-xl font-extrabold text-indigo-600 dark:text-indigo-600 md:text-lg lg:text-xl">
            Highlight Activities :
          </h2>
          <div className=" grid grid-cols-1 gap-1 lg:grid-cols-1 lg:gap-1 items-center justify-center">
            {volunteerData.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                img={item.img}
                description={item.description}
                link={item.link}
                partner={item.partner}
                align={item.align}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VolunteeringPage;
