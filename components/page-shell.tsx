import Header from "@/components/header";
import Footer from "@/components/footer";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen overflow-hidden bg-bg bg-grid">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_70%_10%,rgba(34,197,94,0.18),transparent_32%),radial-gradient(circle_at_10%_20%,rgba(34,211,238,0.11),transparent_28%)]" />
      <Header />
      {children}
      <Footer />
    </main>
  );
}
