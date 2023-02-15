import { sanityClient } from "../../sanity.js";

export async function getPets() {
  const query = `*[_type == "pet"]`;
  const pets = sanityClient.fetch(query);
  return pets;
}
