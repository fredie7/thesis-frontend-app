"use client";
import { LogOut, Menu } from "lucide-react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { useSession } from "next-auth/react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "@/redux/toggleSlice";

function Header() {
  const dispatch = useDispatch();
  const { data: session } = useSession();

  const handleMenuClick = () => {
    dispatch(toggleSidebar());
  };

  function generateUserId() {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let userId = "";
    for (let i = 0; i < 20; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      userId += chars[randomIndex];
    }
    return userId;
  }

  const handleGoogleForm = () => {
    // console.log("Session Data:", session); // Debugging session object
    // console.log(
    //   "UID===>>",
    //   // session?.user && "uid" in session.user ? session.user.uid : "No UID found"
    //   session?.user && console.log("GOOGLE FORM USER===>>", session?.user)
    // );

    const userName = session?.user?.name || "Anonymous";
    // const encodedName = encodeURIComponent(userName);
    const encodedName = encodeURIComponent(generateUserId());
    const fieldId = "1913498831";

    const googleFormUrl = `https://docs.google.com/forms/d/e/1FAIpQLSfLmd-P6TDLoZlJXX3qLUf8JWuAsAqYP4D2o8Pm3AErG9P2GA/viewform?usp=pp_url&entry.${fieldId}=${encodedName}`;

    window.open(googleFormUrl, "_blank");
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-200 border-b sticky top-0 z-20">
      {/* Menu icon visible only on mobile */}
      <div className="flex items-center">
        {/* <div className="flex items-center justify-center text-purple-900 font-extrabold text-1xl md:text-2xl lg:text-3xl"> */}
        <div className="flex items-center justify-center text-purple-900 font-extrabold">
          MED-45 AI
        </div>
      </div>

      {/* Right side buttons */}
      <div className="flex items-center space-x-4">
        <section
          className="mb-4 flex mx-auto items-center justify-center mt-1 shadow-[0_4px_6px_rgba(0,0,0,0.3),0_4px_6px_rgba(255,0,0,0.5)] rounded-md tracking-widest cursor-pointer bg-purple-200 text-red-400 px-1"
          onClick={handleGoogleForm}
        >
          Feedback
        </section>

        <div className="mx-auto mb-2">
          {/* {session?.user?.image && (
            <Image
              onClick={() => signOut()}
              className="rounded-full cursor-pointer hover:opacity-50"
              src={session.user.image}
              alt="User's profile picture"
              width={50}
              height={50}
            />
          )} */}
          <LogOut className="cursor-pointer" onClick={() => signOut()} />
        </div>
      </div>
    </div>
  );
}

export default Header;
