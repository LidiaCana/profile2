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
            Liquidation Smart Contract
          </h1>
          <br />
          <p>
            Few days ago I started a new course of DeFi with the university X (I
            do not remember exactly the name). Because finance and crypto both
            are new fields for me, there was a challenge to understand this
            concept. And I would like to share with you some important aspect
            the help me to understand. ** First What is a overcollateralized
            loan? It is a Loan of DAI (I do not know if could be possible with
            other crypto), where the user deposit a guarantee (a cryto for
            example 5 ETH), the collateral must be greater than the loan, to
            protect the lender from fluctuations. ** Why users made loan? So,
            like in real life people has properties for example house, farm but
            they need liquid money for whatever reason. Could be invest etc. in
            this case the properties are Cryptocurrencies. So the user loan his
            crypto has collateral and he/she get DAI (liquid) ** Who made the
            loan? The loan is usually provided by a lending protocol or
            liquidity pool, rather than a single individual or traditional
            institution. Let’s break down how loans are issued in DeFi and
            clarify who makes the loan. 1. Lending Protocols or Platforms
            Protocols like Aave, MakerDAO, Compound, or Venus facilitate loans.
            These platforms operate through smart contracts that automatically
            enforce rules without the need for intermediaries. Smart Contract
            Role: When a user borrows assets (like DAI or USDC), the smart
            contract ensures that the borrower locks sufficient collateral and,
            if necessary, triggers liquidation if conditions aren’t met. 2.
            Liquidity Providers (LPs) The funds available for loans in DeFi come
            from liquidity pools contributed by individual users or LPs
            (liquidity providers). These users deposit their assets into the
            protocol and earn interest or rewards when their assets are lent to
            others. How it Works: User A deposits USDC in Aave’s liquidity pool.
            User B can borrow this USDC by posting collateral (e.g., ETH). User
            A earns interest on the USDC they provided, and User B must repay
            the loan with interest. 3. The Protocol as the Lender Although
            individual users supply the funds, the protocol itself is considered
            the lender because: The terms and rules of the loan (interest rate,
            collateral ratio, etc.) are defined by the smart contract. The
            execution of the loan and liquidation happens automatically through
            the protocols code. 4. Borrower and the Role of Collateral The
            borrower locks up collateral (like ETH, BTC, or other crypto assets)
            to secure the loan. This overcollateralization is essential to
            protect the lenders and the protocol from volatility risks. What
            Happens if the Collateral Value Drops? If the value of your
            collateral falls below a safe threshold (say to 120% of the loan
            value), the protocol initiates a liquidation to protect the lender
            and ensure the loan is covered. A keeper (an automated bot) sells
            part of the collateral to repay the loan, plus a penalty. Formula
            for Collateralization Ratio Collateralization Ratio =
            (Collateral Value / Loan Value) x 100 Example: If your collateral is
            worth 150 DAI and your loan is 100 DAI, the collateralization ratio
            is: (150 / 100)×100 = 150 % ** Step-by-Step Liquidation Process
            Example Scenario: - Loan amount: 100 DAI - Collateral: 1 ETH worth
            150 DAI (at the start) - Collateralization ratio required: 150% -
            Liquidation threshold: 120% (if the collateral drops below this
            ratio, liquidation is triggered). 1. Market Price Drops Let’s say
            the price of ETH drops from 150 DAI to 110 DAI. Now, the value of
            your collateral is only 110 DAI, which gives:
            Collateralization Ratio = (110/100)x100 = 110% This is below the
            120% liquidation threshold, so the loan becomes eligible for
            liquidation. 2. Liquidation Trigger A keeper (an automated bot)
            detects that the loan has fallen below the safe threshold and
            triggers the liquidation process. The protocol marks the loan as
            at-risk, allowing the liquidation process to start. 3. Selling the
            Collateral The keeper bot or the smart contract sells a portion of
            the collateral (ETH) to repay the loan. In this case, to cover the
            100 DAI loan, the protocol will need to sell enough ETH to: Repay
            the 100 DAI loan. Include a liquidation penalty (e.g., a 10% fee).
            So, the protocol might sell 1 ETH for 110 DAI: 100 DAI goes to repay
            the loan. 10 DAI goes to the keeper as a reward. 4. What Happens to
            the Borrower? If the full amount of collateral is sold, the borrower
            loses the collateral. If only part of the collateral is needed to
            repay the loan, the remaining ETH is returned to the borrower.
            Conclusion Liquidation of an overcollateralized loan is a safety
            measure to protect both lenders and the protocol from price
            volatility. If the collateral loses value and falls below the
            necessary threshold, the keepers automatically sell the collateral,
            recovering the borrowed funds. This process ensures the stability of
            the protocol and mitigates insolvency risks.
          </p>
          <br />
        </div>
      </section>
    </Layout>
  );
};

export default VolunteeringPage;
