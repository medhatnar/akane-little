import Image from "next/image";
import works from "../works.json";

export default function Work(id: string) {
  const performance = works[id];
  return (
    <div className="px-4 w-full">
      <h1 className="sr-only">performance title here</h1>
      A WORK OF AKANE
    </div>
  );
}