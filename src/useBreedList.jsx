import { useQuery } from "@tanstack/react-query";
import fetchBreedlist from "./fetchBreedlist";

const useBreedList = (animal) => {
  const results = useQuery(["breeds", animal], fetchBreedlist);
  return [results?.data?.breeds ?? [], results.status];
};

export default useBreedList;
