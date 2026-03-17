import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthorRepo } from "@/repos";

export default function useUpdateAuthor() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, formData }) => AuthorRepo.update(id, formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authors"] });
    },
  });
}
