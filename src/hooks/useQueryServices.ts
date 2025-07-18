"use client";

import { useQuery } from "@tanstack/react-query";
import { getServices } from "@/services/services";

export function useQueryServices() {
  return useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });
}
