import { useQuery } from "@tanstack/react-query";
import { get } from "@/constants/api-helper";
import { ADMIN_DASHBOARD_STATS } from "@/constants/endpoints";

export default function useGetDashboardStats() {
  return useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: () => get(ADMIN_DASHBOARD_STATS),
  });
}
