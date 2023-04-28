import Discord from "@/svgIcons/Discord";
import Github from "@/svgIcons/Github";
import LinkedIn from "@/svgIcons/LinkedIn";
import Mastodon from "@/svgIcons/Mastodon";
import Twitter from "@/svgIcons/Twitter";
import { PaperClipIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const socialLinks = [
    {
      discord: "https://discordapp.com/users/789491676469133333",
      gitHub: "https://github.com/TeddyGavi",
      linkedIn: "https://www.linkedin.com/in/matcdavis/",
      resume: "https://resume.creddle.io/resume/gkeljla1sv8",
      twitter: "https://twitter.com/MatcDavis",
      mastodon: "https://mastodon.social/@teddygavi",
    },
  ];

  const tailwindStyle =
    "h-8 w-8 hover:opacity-100 opacity-40 transition-all duration-200";
  return (
    <footer
      aria-label="Social Links"
      className="flex pb-6 w-full dark:text-stone-400 text-stone-900"
    >
      <div className="mx-auto flex space-x-6 ">
        {socialLinks.map(
          ({ discord, gitHub, linkedIn, resume, twitter, mastodon }, i) => {
            return (
              <React.Fragment key={i}>
                <Link href={discord}>
                  <Discord tailwindStyle={tailwindStyle} />
                </Link>
                <Link href={gitHub}>
                  <Github tailwindStyle={tailwindStyle}></Github>
                </Link>
                <Link href={linkedIn}>
                  <LinkedIn tailwindStyle={tailwindStyle}></LinkedIn>
                </Link>
                <Link href={twitter}>
                  <Twitter tailwindStyle={tailwindStyle}></Twitter>
                </Link>
                <Link href={mastodon}>
                  <Mastodon tailwindStyle={tailwindStyle}></Mastodon>
                </Link>
                <Link href={resume}>
                  <PaperClipIcon className={tailwindStyle} />
                </Link>
              </React.Fragment>
            );
          }
        )}
      </div>
      {/* testing out back to top button, if nav is fixed and blurred background this is not needed */}
      <button className="ml-auto pr-6 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={tailwindStyle}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </footer>
  );
}
