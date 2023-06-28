import { createClient } from "next-sanity";
import { definePreview } from "next-sanity/preview";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2023-02-15",
  useCdn:
    typeof document !== "undefined" && process.env.NODE_ENV === "production",
});

const imageBuilder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => imageBuilder.image(source);

export const usePreview = definePreview({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
});
