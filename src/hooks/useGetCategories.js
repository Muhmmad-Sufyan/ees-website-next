import { useQuery } from "@tanstack/react-query";
import { CategoryRepo } from "@/repos";

export default function useGetCategories({ page = 1, per_page = 10 } = {}) {
  return useQuery({
    queryKey: ["categories", { page, per_page }],
    queryFn: () => CategoryRepo.getAll({ page, per_page }),
  });
}
