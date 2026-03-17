import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CategoryRepo } from "@/repos";

export default function useCreateCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => CategoryRepo.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
}
