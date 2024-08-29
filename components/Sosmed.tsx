"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/LayoutGrid";

export function LayoutGridSosmed() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <a href="https://instagram.com/rulxrstech" className="font-bold md:text-4xl text-xl text-white">
        @rulxrstech
      </a>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Don't forget to my follow instagram hehehe :u.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <a href="https://linkedin.com/in/rulanugrh" className="font-bold md:text-4xl text-xl text-white">
        @rulanugrh
      </a>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        This is my linkedin, you can connect with me, whenever you want
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <a href="https://x.com/rulanugrh" className="font-bold md:text-4xl text-xl text-white">
        @rulanugrh
      </a>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        You want learn about k8s?. Don't forget to follow me hehhee :u
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <a href="https://id.pinterest.com/rulanugrh" className="font-bold md:text-4xl text-xl text-white">
        @rulanugrh
      </a>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Sometimes I like pixel art design, but now I'm lazy to do it :u.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/ig.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "/linked.png",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/x.png",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "/oberion.webp",
  },
];
