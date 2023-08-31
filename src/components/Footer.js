import Discord from "@/svgIcons/Discord";
import Github from "@/svgIcons/Github";
import LinkedIn from "@/svgIcons/LinkedIn";
import Mastodon from "@/svgIcons/Mastodon";
import Twitter from "@/svgIcons/Twitter";
import { ArrowUpCircleIcon, PaperClipIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const social = {
    discord: "https://discordapp.com/users/789491676469133333",
    gitHub: "https://github.com/TeddyGavi",
    linkedIn: "https://www.linkedin.com/in/matcdavis/",
    resume: "https://github.com/TeddyGavi/Resume",
    twitter: "https://twitter.com/MatcDavis",
    mastodon: "https://mastodon.social/@teddygavi",
  };

  const tailwindStyle =
    "h-8 w-8 hover:opacity-100 opacity-40 transition-all duration-200";
  return (
    <footer
      aria-label="Social Links and attributions"
      className="flex flex-col w-full p-6 dark:text-stone-400 text-stone-900"
    >
      {/* testing out back to top button, if nav is fixed and blurred background this is not really needed except mobile? */}
      <Link
        href={"#"}
        className="items-center justify-center hidden transition-opacity duration-200 md:flex hover:opacity-100 opacity-40"
      >
        <span className="my-4 text-xs font-thin md:text-sm font-source">
          Back to Top
        </span>
        <ArrowUpCircleIcon className={`h-8 w-8 pl-2`} />
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
        <Link href={social.resume} className="flex flex-col items-center" aria-label="Resume">
          <PaperClipIcon className={tailwindStyle} />
          <span className="text-xs font-thin dark:text-stone-400 text-stone-900 font-source">Resume</span>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center my-4 text-xs font-thin leading-relaxed tracking-wider break-before-auto dark:text-stone-400 text-stone-900 font-source">
      <p className="text-center">
        I am grateful to live on the traditional territory of the <span lang="en" className="font-normal">&nbsp;Sḵwx̱wú7mesh Úxwumixw&nbsp;</span>(Squamish Nation)
      </p>
      </div>
    </footer>
  );
}
