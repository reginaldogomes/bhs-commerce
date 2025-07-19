"use client";

import { useQueryServices } from "@/hooks/useQueryServices";
import { ServiceCard } from "@/components/service/service-card";

export default function ServicesPage() {
  const { data, isLoading, error } = useQueryServices();

  if (isLoading)
    return <p className="text-center py-20">Carregando serviços...</p>;
  if (error)
    return (
      <p className="text-center py-20 text-red-500">
        Erro ao carregar serviços
      </p>
    );

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Serviços disponíveis</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data?.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </main>
  );
}
