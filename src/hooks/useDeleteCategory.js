import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CategoryRepo } from "@/repos";

export default function useDeleteCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => CategoryRepo.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
}
