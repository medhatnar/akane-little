import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="w-screen">
        <div className="img-container w-full h-130 sm:w-screen sm:h-screen relative">
          <Image
            src="/works/redroom/corner-1.png"
            alt="Akane Little"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </main>
    </div>
  );
}
