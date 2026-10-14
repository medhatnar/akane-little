import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="w-screen">
        <div className="img-container w-full h-130 sm:w-screen sm:h-screen relative">
          <Image
            src="/FormaldehydeD2.309.jpg"
            alt="Akane Little"
            fill
            sizes="(max-width: 768px) 100vw, 50vw" // Helps Next.js serve optimized source sizes
            style={{ objectFit: "cover" }}
            objectFit="cover"
            priority
          />
        </div>
      </main>
    </div>
  );
}
