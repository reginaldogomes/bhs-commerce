import { supabase } from "@/lib/supabase";
import { Service } from "@/types/service";

export async function getServices(): Promise<Service[]> {
  const { data, error } = await supabase
    .from("services")
    .select("*, categories(name)") // <- nome correto da relação
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data as Service[];
}
