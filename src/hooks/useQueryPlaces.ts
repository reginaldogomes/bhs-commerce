import { useQuery } from "@tanstack/react-query";
import { fetchPlaces } from "@/services/places";

export function useQueryPlaces() {
  return useQuery({
    queryKey: ["places"],
    queryFn: fetchPlaces,
  });
}
