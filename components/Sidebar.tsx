"use client";
import React from "react";
import NewSession from "./NewSession";
import ChatHistory from "./ChatHistory";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import SessionRow from "./SessionRow";
import { useSelector } from "react-redux";
function Sidebar() {
  const { data: session } = useSession();
  const sidebarVisible = useSelector(
    (state: any) => state.toggle.sidebarVisible
  );
  console.log("sidebarVisible===>>s", sidebarVisible);
  // const [chats, loading, error] = useCollection(
  //   session && collection(db, "users", session?.user?.email!, "chats")
  // );
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );
  console.log(chats);

  const handleGoogleForm = () => {
    const userName = session?.user?.name || "Anonymous"; // Get user name from Firebase session or fallback to "Anonymous"
    const encodedName = encodeURIComponent(userName); // Encode the name to ensure URL safety
    const fieldId = "1913498831"; // The field ID from your pre-filled link

    const googleFormUrl = `https://docs.google.com/forms/d/e/1FAIpQLSfLmd-P6TDLoZlJXX3qLUf8JWuAsAqYP4D2o8Pm3AErG9P2GA/viewform?usp=pp_url&entry.${fieldId}=${encodedName}`;

    window.open(googleFormUrl, "_blank"); // Open the form in a new tab
  };

  return (
    <div className="flex flex-col h-screen p-2 bg-gray-100">
      <div className="flex-1">
        <div>
          {/* NewChat */}
          {!session ? "" : <NewSession />}

          {chats?.docs.map((chat) => (
            <SessionRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>
      {/* <section className="mb-4 mx-auto" onClick={handleGoogleForm}>
        FEEDBACK
      </section> */}
      {session ? (
        <div className="mx-auto mb-2">
          {/* <Image
            onClick={() => signOut()}
            className="rounded-full cursor-pointer hover:opacity-50"
            src={session.user?.image!}
            alt="User's profile picture"
            width={50}
            height={50}
          /> */}
          <div className="sticky bottom-0 mb-2 flex justify-center w-full">
            <Image
              onClick={() => signOut()}
              className="rounded-full cursor-pointer hover:opacity-50"
              src={session.user?.image!}
              alt="User's profile picture"
              width={50}
              height={50}
            />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center text-purple-900 font-extrabold">
          MED-45 AI
        </div>
      )}
    </div>
  );
}

export default Sidebar;
