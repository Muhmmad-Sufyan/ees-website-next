import { useQuery } from "@tanstack/react-query";
import { BlogRepo } from "@/repos";

export default function useGetPublicBlogBySlug(slug) {
  return useQuery({
    queryKey: ["public-blog", slug],
    queryFn: () => BlogRepo.getPublicBySlug(slug),
    enabled: !!slug,
  });
}
