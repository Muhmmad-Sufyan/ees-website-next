import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BlogRepo } from "@/repos";

export default function useDeleteBlog() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => BlogRepo.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
}
