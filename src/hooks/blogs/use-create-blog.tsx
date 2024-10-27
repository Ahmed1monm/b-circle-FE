import { useMutation, useQueryClient } from "@tanstack/react-query";
import client from "@/lib/client";

const createBlog = async (blogData: any) => {
  const { data } = await client.post("/blog", blogData);
  return data;
}
export const useCreateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog"] });
    },
  });
};