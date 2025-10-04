"use client";

// import { auth } from "@/auth";
// import { singIn } from "@/auth";
// import { signin } from "@/lib/prisma-actions";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";

export default function Home() {
  // console.log(auth);

  const session = useSession();
  console.log(session);
  return <button onClick={() => signIn()}>Home</button>;
}
