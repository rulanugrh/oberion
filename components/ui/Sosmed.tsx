"use client";

import { LayoutGrid } from "./LayoutGrid";

export function LayoutGridSosmed() {
  return (
    <div className="w-full h-[620px] md:h-[540px]">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const CardContent = ({
  title,
  desc,
  href,
  username,
}: {
  title: string;
  desc: string;
  href: string;
  username: string;
}) => {
  return (
    <div className="h-full flex flex-col justify-end rounded-2xl border border-white/10 bg-black/25 backdrop-blur-lg p-5 md:p-6">

      {/* Overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

      {/* Content */}
      <div className="relative z-10 space-y-3">

        {/* Platform */}
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] bg-gradient-to-r from-neutral-300 to-neutral-500 bg-clip-text text-transparent mb-2">
            {title}
          </p>

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl font-semibold text-white hover:text-neutral-300 transition duration-300"
          >
            {username}
          </a>
        </div>

        {/* Description */}
        <p className="text-xs md:text-sm leading-relaxed text-neutral-300 max-w-sm">
          {desc}
        </p>
      </div>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: (
      <CardContent
        title="Instagram"
        username="@hng202005"
        href="https://instagram.com/hng202005"
        desc="Sharing backend development, Linux setups, and engineering moments."
      />
    ),
    className: "md:col-span-2",
    thumbnail: "/ig.png",
  },

  {
    id: 2,
    content: (
      <CardContent
        title="LinkedIn"
        username="@rulanugrh"
        href="https://linkedin.com/in/rulanugrh"
        desc="Connect professionally and follow my journey."
      />
    ),
    className: "col-span-1",
    thumbnail: "/linked.png",
  },

  {
    id: 3,
    content: (
      <CardContent
        title="Twitter / X"
        username="@rulanugrh"
        href="https://x.com/rulanugrh"
        desc="Cloud, Kubernetes, and DevSecOps thoughts."
      />
    ),
    className: "col-span-1",
    thumbnail: "/x.png",
  },

  {
    id: 4,
    content: (
      <CardContent
        title="Pinterest"
        username="@rulanugrh"
        href="https://id.pinterest.com/rulanugrh"
        desc="Pixel art, UI inspirations, and visual experiments."
      />
    ),
    className: "md:col-span-2",
    thumbnail: "/oberion.webp",
  },
];