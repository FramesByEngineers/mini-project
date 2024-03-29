import { siteConfig } from "@/config/site";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { Badge } from "./ui/badge";
import AuthenticationPage from "./authentication-page";

const HeroComponent = () => {
  // console.log(process.env.NEXT_APP_RAZOR_PAY_KEY_ID);
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex items-center justify-center">
        <Badge
          className={
            "bg-secondary hover:bg-muted text-sm flex justify-between gap-3 text-muted-foreground"
          }
        >
          <p>🎉</p>
          <p>Discover Wellness Within</p>
        </Badge>
      </div>

      <div className="flex flex-col items-center gap-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
          Together Towards Better Mental Health.
          <br className="hidden sm:inline" />
        </h1>
        {/* <h1 className="text-3xl mt-3 font-extrabold leading-tight tracking-tighter md:text-4xl text-center"></h1> */}
        <p className="max-w-[700px] text-lg text-muted-foreground text-center">
          {siteConfig.description}
        </p>
      </div>

      <div className="flex justify-center mt-3">
        <div className="flex gap-4">
          <Link
            href={siteConfig.links.signUp}
            // target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
          >
            Sign Up
          </Link>
          <Link
            // target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline" })}
          >
            Login
          </Link>
        </div>
      </div>

      <div className="border rounded-sm mt-6 hidden md:flex">
        <AuthenticationPage />
      </div>
    </section>
  );
};

export default HeroComponent;
