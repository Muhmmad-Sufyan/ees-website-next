import { useQuery } from "@tanstack/react-query";
import { BlogRepo } from "@/repos";

export default function useGetBlogs({ page = 1, per_page = 10, sort, status } = {}) {
  return useQuery({
    queryKey: ["blogs", { page, per_page, sort, status }],
    queryFn: () => BlogRepo.getAll({ page, per_page, sort, status }),
  });
}
