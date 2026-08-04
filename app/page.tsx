import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChoose from "@/components/WhyChoose";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/Whatsapp";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <WhyChoose />

      <Services />

      <Gallery />

      <Testimonials />

      <Process />

      <CTA />

      <Contact />

      <Footer />

      <Whatsapp />
    </>
  );
}