"use client";
import React from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import img1 from "../images/img2.jpeg";
import { useSession } from "next-auth/react";

function Login() {
  const { data: session } = useSession();
  console.log("SESSION===>>>", session);
  !session ? console.log("no session") : console.log("session");
  return (
    // <div className="bg-white h-screen flex flex-col justify-center items-center text-center">
    //   <Image
    //     src={img1}
    //     width={300}
    //     height={300}
    //     className="rounded-md"
    //     alt=""
    //   />
    //   <p className="w-[70%] mx-auto font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 p-8 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:opacity-90 mt-12">
    //     Break free from Cognitive Distortions with MED-45—your personal guide to
    //     identifying and overcoming negative thought patterns in a private,
    //     interactive space.
    //   </p>

    //   <button
    //     onClick={() => signIn("google")}
    //     className="text-purple-800/60 font-bold text-2xl animate-pulse mt-6 border-2 border-red-300 rounded-lg p-3 bg-slate-100 shadow-lg"
    //   >
    //     Sign in to get started
    //   </button>
    // </div>
    <div className="bg-white h-screen flex flex-col justify-center items-center text-center px-4">
      <div className="w-full max-w-[300px] h-[300px] sm:w-[350px] sm:h-[350px]">
        <Image
          src={img1}
          layout="responsive"
          width={300}
          height={300}
          className="rounded-md object-contain" // Ensure the image scales correctly without cropping
          alt=""
        />
      </div>
      <p className="w-full sm:w-[70%] mx-auto font-extrabold text-1xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 p-6 sm:p-8 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:opacity-90 mt-6 sm:mt-12">
        Break free from Cognitive Distortions with MED-45—your personal guide to
        identifying and overcoming negative thought patterns in a private,
        interactive space.
      </p>

      <button
        onClick={() => signIn("google")}
        className="text-purple-800/60 font-bold text-2xl animate-pulse mt-6 border-2 border-red-300 rounded-lg p-3 bg-slate-100 shadow-lg"
      >
        Sign in to get started
      </button>
    </div>
  );
}

export default Login;
