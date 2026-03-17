import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CategoryRepo } from "@/repos";

export default function useUpdateCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => CategoryRepo.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
}
