import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </main>
    </div>
  );
}
