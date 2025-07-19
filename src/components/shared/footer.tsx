export function Footer() {
  return (
    <footer className="bg-zinc-100 border-t mt-10">
      <div className="container py-6 text-center text-sm text-zinc-600">
        © {new Date().getFullYear()} DigitalStore. Todos os direitos reservados.
      </div>
    </footer>
  );
}
