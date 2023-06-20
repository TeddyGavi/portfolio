import Discord from "@/svgIcons/Discord";
import Github from "@/svgIcons/Github";
import LinkedIn from "@/svgIcons/LinkedIn";
import Mastodon from "@/svgIcons/Mastodon";
import Twitter from "@/svgIcons/Twitter";
import { PaperClipIcon } from "@heroicons/react/24/solid";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export default function Footer() {
  const social = {
    discord: "https://discordapp.com/users/789491676469133333",
    gitHub: "https://github.com/TeddyGavi",
    linkedIn: "https://www.linkedin.com/in/matcdavis/",
    resume: "https://resume.creddle.io/resume/gkeljla1sv8",
    twitter: "https://twitter.com/MatcDavis",
    mastodon: "https://mastodon.social/@teddygavi",
  };

  const tailwindStyle =
    "h-8 w-8 hover:opacity-100 opacity-40 transition-all duration-200";
  return (
    <footer
      aria-label="Social Links"
      className="flex flex-col w-full p-6 dark:text-stone-400 text-stone-900"
    >
      {/* testing out back to top button, if nav is fixed and blurred background this is not really needed except mobile? */}
      <Link
        href={"/"}
        className="flex items-center justify-center sm:hidden md:visible"
      >
        <span className="my-4 text-xs font-thin font-source">Back to Top</span>
        <ArrowUpCircleIcon className={`${tailwindStyle} pl-2`} />
      </Link>
      <div className="flex mx-auto space-x-6 ">
        <Link href={social.discord}>
          <Discord tailwindStyle={tailwindStyle} />
        </Link>
        <Link href={social.gitHub}>
          <Github tailwindStyle={tailwindStyle}></Github>
        </Link>
        <Link href={social.linkedIn}>
          <LinkedIn tailwindStyle={tailwindStyle}></LinkedIn>
        </Link>
        <Link href={social.twitter}>
          <Twitter tailwindStyle={tailwindStyle}></Twitter>
        </Link>
        <Link href={social.mastodon}>
          <Mastodon tailwindStyle={tailwindStyle}></Mastodon>
        </Link>
        {/* <Link href={social.resume}>
          <PaperClipIcon className={tailwindStyle} />
        </Link> */}
      </div>
    </footer>
  );
}
