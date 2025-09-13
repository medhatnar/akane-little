import Image from "next/image";

const testData = [
  {
    blurb: "this is a blurb about Akane",
    date: new Date(),
    url: "https://www.youtube.com/embed/XRXVSpvuSKM?si=02esynWG0K1jVYlI",
    image: "/corner1.png",
    title: "A MEAL",
  },
  {
    blurb: "this is a blurb about Akane",
    date: new Date(),
    url: "https://www.youtube.com/embed/XRXVSpvuSKM?si=02esynWG0K1jVYlI",
    image: "/AkaneLittle_MengwenCao.jpg",
    title: "A MEAL",
  },
  {
    blurb: "this is a blurb about Akane",
    date: new Date(),
    url: "https://www.youtube.com/embed/XRXVSpvuSKM?si=02esynWG0K1jVYlI",
    image: "/corner12.png",
    title: "A MEAL",
  },
  {
    blurb: "this is a blurb about Akane",
    date: new Date(),
    url: "https://www.youtube.com/embed/XRXVSpvuSKM?si=02esynWG0K1jVYlI",
    image: "/corner5.png",
    title: "A MEAL",
  },
];

export default function Works() {
  return (
    <div className="px-4 w-full">
      <h1 className="sr-only">Akane&apos;s past and upcoming performances.</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 md:gap-[16px] text-center mt-16">
        {testData.map((data, i) => {
          return (
            <li key={i} className="px-auto mb-8 md:mb-0 w-full text-center">
              <a href="" className="w-full">
                <div className="img-container w-full h-48 md:h-100 relative">
                  <Image
                    className="object-cover"
                    src={data.image}
                    layout="fill"
                    alt={data.title}
                  />
                </div>
              </a>
              <h2 className="m-2 text-2xl font-bold">{data.title}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
