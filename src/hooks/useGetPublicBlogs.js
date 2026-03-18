import { useQuery } from "@tanstack/react-query";
import { BlogRepo } from "@/repos";

export default function useGetPublicBlogs(params = {}) {
  return useQuery({
    queryKey: ["public-blogs", params],
    queryFn: () => BlogRepo.getPublicAll(params),
  });
}
