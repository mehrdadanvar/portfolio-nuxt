import Publications from "../../assets/data";

export default defineEventHandler(async (event) => {
  return {
    pubs: Publications,
  };
});
