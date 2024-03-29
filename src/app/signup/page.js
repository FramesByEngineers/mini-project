"use client";
import AuthenticationPage from "@/components/authentication-page";
import React from "react";
import { usePathname } from "next/navigation";

const SignUp = () => {
  const pathname = usePathname();
  // console.log(pathname);
  return <div className="md:mt-0 mt-20"><AuthenticationPage /></div>;
};

export default SignUp;
