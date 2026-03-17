import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TagRepo } from "@/repos";

export default function useDeleteTag() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => TagRepo.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tags"] });
    },
  });
}
