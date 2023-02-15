import { createClient } from "next-sanity";

export const sanityClient = createClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2023-02-15",
  useCdn: process.env.NODE_ENV === "production",
});
