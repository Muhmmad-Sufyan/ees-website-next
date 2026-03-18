import { useQuery } from "@tanstack/react-query";
import { BlogRepo } from "@/repos";

export default function useGetBlog(id) {
  return useQuery({
    queryKey: ["blog", id],
    queryFn: () => BlogRepo.getById(id),
    enabled: !!id,
    staleTime: 0,
    gcTime: 0,
    refetchOnMount: "always",
  });
}
