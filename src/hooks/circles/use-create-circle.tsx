import { useMutation, useQueryClient } from "@tanstack/react-query";
import client from "@/lib/client";

const createCircle = async (circleData: any) => {
  const { data } = await client.post("/circle", circleData);
  return data;
}
export const useCreateCircle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCircle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["circle"] });
    },
  });
};