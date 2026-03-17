import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BlogRepo } from "@/repos";

export default function useCreateBlog() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData) => BlogRepo.create(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
}
