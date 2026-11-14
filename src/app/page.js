import Hero from "@/components/home/Hero";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import Categories from "@/components/home/Categories";
import AboutPreview from "@/components/home/AboutPreview";
import WhyUs from "@/components/home/WhyUs";
import Consultants from "@/components/home/Consultants";
import Testimonials from "@/components/home/Testimonials";
import Cta from "@/components/home/Cta";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedProperties />
      <Categories />
      <AboutPreview />
      <WhyUs />
      <Consultants />
      <Testimonials />
      <Cta />
    </main>
  );
}
