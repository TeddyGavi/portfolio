# Personal Site of Matt Davis

- This is a [Next.js](https://nextjs.org/) with [Sanity](https://www.sanity.io) Project.

## Getting Started

- git clone
- `cd` into directory
- to run the development server:

```bash
npm run dev
```

- this is a mono repo, so in order to access sanity you would need to set up your own account, however the CMS is verified and attached to my personal account
- Best to simply run the Next dev server if you want to run locally

- or simply visit the [live site](https://matcdavis.dev)

## Goals

- A place where I can showcase my work, and others can learn more about who I am.
- implement Sanity as a headless CMS via Next
- learn more about Next specially:
  1. `getStaticProps`
  2. Dynamic routing
  3. Folder Structure
- Basic accessibility with tab navigation

## Future Goals

- Set up Blog via Sanity
- Improve accessibility
  - [ ] Alternative color schemes more than light/dark
  - [ ] Hamburger menu on mobile improvements
- Add `swr` for cleaner data fetching and validations
- Refactor captcha and Email api routes and handlers

## Process

- First step is set up and configure Next, with TailwindCSS and [Josh Comaeu Custom CSS reset](https://www.joshwcomeau.com/css/custom-css-reset/)
- Next was to set Sanity configuration
- Build a basic page to test
- integrate framer motion
- Go from there!

## Bugs and Known Issues

- nothing currently...please report if found.

## Dependencies

- Tailwind
- Next
- Portable Text
- Sendgrid
- next-sanity
- Sanity
- framer motion
- react-hook-form
