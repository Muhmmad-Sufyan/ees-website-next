import { useQuery } from "@tanstack/react-query";
import { AuthorRepo } from "@/repos";

export default function useGetAuthors({ page = 1, per_page = 10 } = {}) {
  return useQuery({
    queryKey: ["authors", { page, per_page }],
    queryFn: () => AuthorRepo.getAll({ page, per_page }),
  });
}
