import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="w-screen">
        <div className="img-container w-screeb h-screen bg-blue relative">
          <Image
            src="/corner1.png"
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
