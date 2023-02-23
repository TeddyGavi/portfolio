import { sanityClient } from "../../sanity";

export const getSocialLinks = async () => {
  const query = /* groq */ `*[_type == "about"]{gitHub, linkedIn, resume, discord, twitter}`;
  const socialLinks = await sanityClient.fetch(query);
  return socialLinks;
};
