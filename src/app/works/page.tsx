import Image from "next/image";
import works from "./works.json";

export default function Works() {
  return (
    <div className="px-4 w-full">
      <h1 className="sr-only">Akane&apos;s past and upcoming performances.</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 md:gap-[16px] text-center mt-16">
        {Object.entries(works).map(([slug, { image, title, date }]) => {
          return (
            <li key={slug} className="px-auto mb-8 md:mb-0 w-full text-center">
              <a href={`/works/${slug}`} className="w-full">
                <div className="img-container w-full h-48 md:h-100 relative">
                  <Image
                    className="object-cover"
                    src={image.thumbnail.path}
                    layout="fill"
                    alt={`A performance still from ${title}`}
                  />
                </div>
              </a>
              <h2 className="m-2 text-2xl font-thin">{title} {date}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
