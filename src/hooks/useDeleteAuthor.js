import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthorRepo } from "@/repos";

export default function useDeleteAuthor() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => AuthorRepo.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authors"] });
    },
  });
}
