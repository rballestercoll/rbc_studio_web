// pages/index.tsx
import Navbar from "@/app/Sections/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <section id="home" className="h-screen flex items-center justify-center">
          <h1 className="text-5xl">Bienvenido a nuestro estudio</h1>
        </section>
        <section id="ars" className="h-screen flex items-center justify-center">
          <h1 className="text-5xl">Ars Section</h1>
        </section>
        {/* Más secciones aquí */}
      </main>
    </>
  );
}
