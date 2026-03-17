import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TagRepo } from "@/repos";

export default function useUpdateTag() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => TagRepo.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tags"] });
    },
  });
}
