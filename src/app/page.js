import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import FloatButton from "@/components/FloatButton";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <Hero />
      <Services />
      <Footer />
      <FloatButton />
    </div>
  );
}
