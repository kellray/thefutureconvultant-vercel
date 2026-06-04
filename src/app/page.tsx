import Image from "next/image";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Services from "@/components/Services";
import Audit from "@/components/Audit";
import BusinessSystem from "@/components/BusinessSystem";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Services />
      <Audit />
      <BusinessSystem />
      <WhyUs />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
