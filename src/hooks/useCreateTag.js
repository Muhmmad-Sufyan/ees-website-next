import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TagRepo } from "@/repos";

export default function useCreateTag() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => TagRepo.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tags"] });
    },
  });
}
