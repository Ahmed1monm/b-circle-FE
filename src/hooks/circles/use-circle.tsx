import client from "@/lib/client";
import { useQuery } from "@tanstack/react-query";

const getCircle = async (id: string) => {
  const { data } = await client.get("/circle/" + id);
  return data;
};

export const useCircle = (id: string) => {
  return useQuery({
    queryKey: ["circle"],
    queryFn: () => getCircle(id),
    enabled: !!id,
  });
};
