"use client";
import React, { Suspense } from "react";

const Page = () => {
  return <Suspense fallback={<div>Loading...</div>}>some comp</Suspense>;
};

export default Page;
