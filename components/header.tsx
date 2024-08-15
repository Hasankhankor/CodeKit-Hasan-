"use client";

import { Button } from "./ui/button";
import { GithubIcon, Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export const Header = () => {
  const navigationItems = [
    {
      title: "",
      href: "/",
      description: "",
    },
  ];

  const [isOpen, setOpen] = useState(false);

  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-background">
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        <div className="absolute left-0 flex items-center h-full">
          <img
            className="w-48 h-auto lg:w-64"
            src="https://ik.imagekit.io/os33grffu/Black_And_White_Modern_Typographic_Simple_Virus_Apparel_Logo__2_-removebg-preview.png?updatedAt=1723746238362"
            alt="Logo"
          />
        </div>

        <div className="justify-start items-center gap-4 lg:flex hidden flex-row ml-48">
          {navigationItems.map((item) => (
            <Link key={item.title} href={item.href}>
              <span className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-muted hover:text-muted-foreground h-10 px-4 py-2">
                {item.title}
              </span>
            </Link>
          ))}
        </div>

        <div className="flex justify-end absolute right-0 w-full gap-4">
  <Button
    className="gap-2"
    onClick={() => {
      window.open("https://github.com/Hasankhankor?tab=repositories", "_blank");
    }}
  >
    Github <GithubIcon className="w-4 h-4" />
  </Button>
</div>


        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    <Link
                      href={item.href}
                      className="flex justify-between items-center"
                      onClick={() => setOpen(false)}
                    >
                      <span className="text-lg">{item.title}</span>
                      <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
