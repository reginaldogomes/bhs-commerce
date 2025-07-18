import { Card, CardContent } from "@/components/ui/card";
import { Service } from "@/types/service";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";

interface Props {
  service: Service;
}

export function ServiceCard({ service }: Props) {
  return (
    <Card className="rounded-2xl shadow-md transition hover:shadow-xl">
      {service.image_url && (
        <Image
          src={service.image_url}
          alt={service.title}
          width={300}
          height={200}
          className="object-cover"
          unoptimized
        />
      )}
      <CardContent className="p-4 space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{service.title}</h3>
          <span className="text-primary font-medium">
            R$ {service.price.toFixed(2)}
          </span>
        </div>
        {service.category && <Badge>{service.category.name}</Badge>}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {service.description}
        </p>
        <Button className="w-full mt-2" variant="outline" size="sm">
          <ShoppingBag className="size-4 mr-2" />
          Contratar
        </Button>
      </CardContent>
    </Card>
  );
}
