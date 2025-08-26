import Image from "next/image";
import cv from "./cv.json";

export default function Contact() {
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
        link to download cv pdf here
        <div className="cv">
          <section>
            <h1>FREELANCE - LIVE PERFORMANCE</h1>
            <ul className="live-experience w-full h-10 px-2">
              {cv.live.map((exp) => {
                return (
                  <li key={exp.name} className="flex w-full border">
                    <p className="mx-2">{exp.date}</p>
                    <ul className="flex flex-col w-3/4 mr-1 items-center text-center">
                      <li className="font-bold">{exp.name}</li> 
                      <li className="italic">{exp.desc}</li>
                      <li className="italic">{exp.location}</li>
                    </ul>
                  </li>
                );
              })}
            </ul>
          </section>
          {/* <section>FREELANCE - FILM + MUSIC VIDEO</section>
          <section>SELECTED COMPANY WORK - RESIDENCIES, SHOOTS & GALAS</section>
          <section>FELLOWSHIPS & AWARDS</section>
          <section>EDUCATION</section> */}
        </div>
      </main>
    </div>
  );
}
