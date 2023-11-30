import { getAllIssuers } from "@/data-access/issuers.repo";

const getIssuers = async () => {
  const Issuers = await getAllIssuers();
  if(!Issuers)
  {
    throw new Error('Error Fetching Issuers');
  }
  return Issuers;
}

export default getIssuers;




