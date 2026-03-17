import { useQuery } from "@tanstack/react-query";
import { TagRepo } from "@/repos";

export default function useGetTags({ page = 1, per_page = 10 } = {}) {
  return useQuery({
    queryKey: ["tags", { page, per_page }],
    queryFn: () => TagRepo.getAll({ page, per_page }),
  });
}
