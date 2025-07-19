"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          DigitalStore
        </Link>

        <nav className="flex gap-4 items-center">
          <Link href="/services">Serviços</Link>
          <Link href="/cart">Carrinho</Link>
          <Link href="/profile">Perfil</Link>
          <Button asChild variant="outline">
            <Link href="/login">Entrar</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
