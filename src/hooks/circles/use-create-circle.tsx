import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateCircle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (circleData: any) => {
      const res = await fetch(`${process.env.BASE_URL}/circles`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(circleData),
      });

      const result = await res.json();
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["circles"] });
    },
  });
};