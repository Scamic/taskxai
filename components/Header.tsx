"use client";

import React from "react";
import { Button } from "../components/ui/button";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Poppins } from "next/font/google";

// Import Google Font Poppins
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const Header = () => {
  const router = useRouter();

  return (
    <div
      className={`fixed top-0 w-full h-16 flex items-center justify-center backdrop-blur-xl bg-black/20 dark:bg-white/10 shadow-md border-b border-white/10 dark:border-black/20 z-50 transition-all ${poppins.className}`}
    >
     

      {/* Navigation */}
      <div className="flex gap-6 text-white text-lg font-semibold">
        <Image src="/logob.png" className="ml-4" height={40} width={40} alt="logo" />

        {["Home", "Task", "Settings"].map((tab) => (
          <button
            key={tab}
            onClick={() => router.push(tab === "Home" ? "/" : `/${tab.toLowerCase()}`)}
            className="px-4 py-1 transition-all rounded-md"
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Right Section */}
      <div className="ml-auto flex items-center gap-4 mr-6">
     
        

        {/* Auth Buttons */}
        <SignedOut>
          <Button variant="outline">
            <SignInButton />
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Header;
