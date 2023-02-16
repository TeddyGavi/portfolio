import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2023-02-15",
  useCdn: process.env.NODE_ENV === "production",
});

const imageBuilder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => imageBuilder.image(source);
