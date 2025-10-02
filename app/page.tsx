"use client";

import { singIn } from "@/auth";
import { signin } from "@/lib/prisma-actions";
import Image from "next/image";

export default function Home() {
  console.log(singIn);
  return <button onClick={signin}>Home</button>;
}
