import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthorRepo } from "@/repos";

export default function useCreateAuthor() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData) => AuthorRepo.create(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authors"] });
    },
  });
}
