import Navbar from "./_components/Navbar";
import Contributors from "./_sections/Contributors";
import End from "./_sections/End";
import Footer from "./_sections/Footer";
import Hero from "./_sections/Hero";
import { Testimonials } from "./_sections/Testimonials";
import Why from "./_sections/Why";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className=' bg-primary'>
        <Hero />
      </section>
      <section className=' mx-auto container'>
        <Why />
      </section>
      <section className=' mx-auto container'>
        <Testimonials />
      </section>
      <section className=' mx-auto container'>
        <Contributors />
      </section>
      <section className=' mx-auto container'>
        <End />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
