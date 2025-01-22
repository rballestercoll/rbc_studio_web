{/* pages/index.tsx */}
import Navbar from "@/app/Sections/Navbar";
import Hero from "@/app/Sections/Hero";
import HelloWorld from "@/app/Sections/Hello_World";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HelloWorld />
      </main>
    </>
  );
}