import client from "@/lib/client";
import { useQuery } from "@tanstack/react-query";

const getCircles = async () => {
  const { data } = await client.get("/circle");
  return data;
};

export const useCircles = () => {
  return useQuery({
    queryKey: ["circle"],
    queryFn: getCircles,
  });
};
