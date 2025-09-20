import Image from "next/image";
import cv from "./cv.json";
import { getHyperLink } from "./helpers";

type CvKey = keyof typeof cv;

const sections: { title: string; experienceProp: CvKey }[] = [
  { title: "LIVE PERFORMANCE (2018-2025)", experienceProp: "live" },
  { title: "FILM + MUSIC VIDEO (2019-2025)", experienceProp: "recorded" },
  {
    title: "SELECTED COMPANY WORK - RESIDENCIES, SHOOTS & GALAS (2021-2024)",
    experienceProp: "company-work",
  },
  {
    title: "FELLOWSHIPS & AWARDS (2025-2026)",
    experienceProp: "fellowships-awards",
  },
  { title: "EDUCATION", experienceProp: "education" },
];

export default function Contact() {
  // screenreader only page name for each page
  return (
    <div className="figure-cv-container flex flex-col w-full h-full ">
      <figure className="mb-5 w-screen md:w-full flex flex-col items-center w-full">
        <div className="img-container w-screen md:w-full h-120 lg:h-220 sm:mx-auto relative">
          <Image
            className="object-contain"
            src="/AkaneLittle_MengwenCao.jpg"
            alt="A portrait of Akane"
            layout="fill"
          />
        </div>
        <figcaption className="text-xs sm:text-sm text-gray-500">
          photo by Mengwen Cao, courtesy of A4
        </figcaption>
      </figure>
      <main className="cv-container">
        <div className="text-center mb-8">
          <a href="/cv.pdf" download="akane-little-cv.pdf">
            <button id="download-cv-pdf-btn" className="tracking-widest">
              Download CV as PDF
            </button>
          </a>
        </div>

        <div className="cv w-full lg:w-3/4 mx-auto">
          {sections.map((section) => (
            <section
              className="experience-section px-2 md:px-16 mb-16 font-"
              key={section.experienceProp}
            >
              <h1 className="font-thin text-[calc(1*calc(.012*min(100vh,900px))+1rem)] tracking-widest text-center my-2">
                {section.title}
              </h1>
              <ul
                id={section.experienceProp}
                className="live-experience w-full h-70 md:h-100 font-thin lg:text-[calc(1*calc(.012*min(100vh,900px))+.5rem)] overflow-y-scroll border border-(--maroon)"
              >
                {cv[section.experienceProp].map((exp) => {
                  const name = getHyperLink(exp.title);
                  return (
                    <li
                      key={exp.title}
                      className="flex w-full border border-(--maroon)"
                    >
                      <p className="m-2">{exp.date}</p>
                      <ul className="flex flex-col w-3/4 mr-1 items-center text-center">
                        <li className="font-bold">{name}</li>
                        <li className="italic">{exp.description}</li>
                        <li className="italic">{exp.location}</li>
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
