"use client";
import Image from "next/image";

import works from "../works.json";
import { use, Usable } from 'react';

type WorksKey = keyof typeof works;

interface WorkProps {
  id: "1" | "2" | "3" | "4" | "5" | "6" | "7";
}

export default function Work({ params } : {params: Usable<WorkProps>}) {
  const paramsUse = use(params);
  const id = paramsUse.id as WorksKey;
  const performance = works[id];
  console.log('performance', performance)
  return (
    <div className="px-4 w-full">
      <h1 className="sr-only">performance title here</h1>
      A WORK OF AKANE
    </div>
  );
}