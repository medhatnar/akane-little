import Image from "next/image";

export default function Contact() {
  return (
    <div className="px-auto sm:px-8 w-full flex flex-col lg:flex-row justify-around lg:justify-between sm:items-center">
      <h1 className="sr-only">Akane&apos;s contact information.</h1>
      <figure className="mb-5 w-screen md:w-full text-center">
        <div className="img-container w-screen md:w-full h-70 xl:h-100 sm:mx-auto relative">
          <Image
            className="object-contain md:object-cover lg:object-contain"
            src="/works/redroom/corner-12.png"
            alt="Akane is sprawled and contorted against the corner of a dark room."
            layout="fill"
          />
        </div>
        <figcaption className="text-xs sm:text-sm text-gray-500">
          photo by Benja Thompson
        </figcaption>
      </figure>
      <main className="px-8 pb-10 lg:h-full lg:w-1/2 xl:w-3/4 text-center">
        <div className="contact-container sm:w-md text-3xl lg:text-2xl font-thin">
            <h1>Akane Little</h1>
            <h2 className="text-xl">they/them</h2>
          
          <address className="mt-10">
            <a href="mailto:akane.m.little@gmail.com">akane.m.little@gmail.com</a>
            <br/>
            <span className="sr-only">Instagram: @akane.little</span>
            IG: <a href="https://www.instagram.com/akane.little/">@akane.little</a>
          </address>
        </div>
      </main>
    </div>
  );
}
