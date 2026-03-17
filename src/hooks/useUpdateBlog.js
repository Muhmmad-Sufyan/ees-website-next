import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BlogRepo } from "@/repos";

export default function useUpdateBlog() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, formData }) => BlogRepo.update(id, formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
}
