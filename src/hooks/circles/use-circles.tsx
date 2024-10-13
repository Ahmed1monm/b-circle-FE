import { useQuery } from "@tanstack/react-query";

export const useCircles = () => {
  return useQuery({
    queryKey: ["circles"],
    queryFn: async () => {
      const res = await fetch(`${process.env.BASE_URL}/circles`);
      const result = await res.json();
      return result;
    },
  });
};