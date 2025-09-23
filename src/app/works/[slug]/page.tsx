"use client";
import Image from "next/image";

import works from "../works.json";
import { use, Usable } from "react";
import { WorkMobileProps, WorkProps } from "../types";

type WorksKey = keyof typeof works;

function WorkMobile({ performance }: WorkMobileProps) {
  return (
    <div className="mobile-work-container flex flex-col justify-between">
      <div className="title-and-date flex items-center">
        <h1 className="text-3xl font-thin mr-2">{performance.title}</h1>
        <h2 className="text-2xl font-thin">{performance.date}</h2>
      </div>
      <div className="figure-carousel mb-5">
        <figure className="w-full text-center">
          <div className="img-container w-full h-55 relative">
            <Image
              className="object-cover"
              src={performance.image.thumbnail.path}
              layout="fill"
              alt={`A performance still from ${performance.title}`}
            />
          </div>
          <figcaption className="text-sm text-gray-500">
            {performance.image.assets.credit}
          </figcaption>
        </figure>
      </div>
      {performance.video && (
        <div className="w-full mb-5">
          <iframe
            width="100%"
            height="315"
            src={performance.video.embed}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <div className="description-and-programs mb-5">
        <p className="font-thin mb-5">{performance.description}</p>
        <div className="programs-container">
          {performance.programs.map((program) => {
            return (
              <a className="block" href={program.link} key={program.title}>
                {program.title}
              </a>
            );
          })}
        </div>
      </div>
      <ul className="credits font-thin w-full flex flex-col flex-wrap">
        {performance.credits.map((credit) => (
          <li
            key={credit.contribution}
          >{`${credit.contribution} - ${credit.contributors}`}</li>
        ))}
      </ul>
      <p className="my-4 flex justify-between font-thin">
        {!!performance.duration && `Duration: ${performance.duration} minutes`}
        <a
          className="gallery-link text-center"
          href={performance.image.assets.galleryPath}
        >
          See full-sized gallery
        </a>
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-3 md:gap-[16px]">
        {performance.image.assets.paths.map((path) => {
          return (
            <li key={path} className="px-auto mb-8 md:mb-0 w-full">
              <div className="img-container w-full h-48 md:h-100 relative">
                <Image
                  className="object-cover"
                  src={path}
                  layout="fill"
                  alt={`A performance still from ${performance.title}`}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Work({ params }: { params: Usable<WorkProps> }) {
  const paramsUse = use(params);
  const slug = paramsUse.slug as WorksKey;
  const performance = works[slug] as WorkProps;
  return (
    <div className="work-container px-4 w-full">
      <div className="md:hidden">
        <WorkMobile performance={performance} />
      </div>

      <div className="hidden md:block">
        <div className="desktop-work-container flex justify-center mb-5">
          <div className="left-container w-3/4 p-2 mr-2 2xl:text-center">
            <div className="title-and-date">
              <h1 className="text-3xl font-thin mr-2 inline">
                {performance.title}
              </h1>
              <h2 className="text-2xl font-thin inline">{performance.date}</h2>
            </div>
            <div className="description-and-programs mb-5">
              <p className="font-thin mb-5">{performance.description}</p>
              <div className="programs-container">
                {performance.programs.map((program) => {
                  return (
                    <a
                      className="block"
                      href={program.link}
                      key={program.title}
                    >
                      {program.title}
                    </a>
                  );
                })}
              </div>
            </div>
            <ul className="credits font-thin w-full flex flex-col flex-wrap">
              {performance.credits.map((credit) => (
                <li
                  key={credit.contribution}
                >{`${credit.contribution} - ${credit.contributors}`}</li>
              ))}
            </ul>
            <p className="my-4">
              {!!performance.duration &&
                `Duration: ${performance.duration} minutes`}
            </p>
          </div>

          <figure className="text-center w-full">
            <div className="img-container w-full h-100 relative">
              <Image
                className="object-contain xl:object-cover"
                src={performance.image.thumbnail.path}
                layout="fill"
                alt={`A performance still from ${performance.title}`}
              />
            </div>
            <figcaption className="text-sm text-gray-500">
              {performance.image.thumbnail.credit}
            </figcaption>
          </figure>
        </div>
        <div className="media-container">
          {performance?.video && (
            <div className="w-full mt-5 flex justify-center">
              <iframe
                width="66%"
                height="600"
                src={performance?.video.embed}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          )}
          <div className="gallery-container text-center">
            <a
              className="gallery-link text-center font-thin"
              href={performance.image.assets.galleryPath}
            >
              See full-sized gallery
            </a>
            <ul className="grid grid-cols-1 md:grid-cols-3 md:gap-[16px] mt-8">
              {performance.image.assets.paths.map((path) => {
                return (
                  <li key={path} className="px-auto mb-8 md:mb-0 w-full">
                    <div className="img-container w-full h-48 md:h-100 relative">
                      <Image
                        className="object-cover"
                        src={path}
                        layout="fill"
                        alt={`A performance still from ${performance.title}`}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
