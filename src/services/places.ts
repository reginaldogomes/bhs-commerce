import { supabase } from "@/lib/supabase";

export async function fetchPlaces() {
  const { data, error } = await supabase.from("places").select("*");
  if (error) throw new Error(error.message);
  return data;
}
