import Header from "./section/Header";
import Hero from "./section/Hero";
import Brands from "./section/Brands.tsx";
import HowItWorks from "./section/HowItWork";
import BeautifulWorks from "./section/BeautifulWorks";
import Capabilities from "./section/Capabilities";
import Testimonial from "./section/Testimonial";
export default function App() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl">
        <Header />
        <div>
          <Hero />
          <Brands />
          <HowItWorks />
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl">
          <BeautifulWorks />
        </div>
      </div>
      <div className="mx-auto max-w-7xl">
        <Capabilities />
      </div>
      <div>
        <div className="mx-auto">
          <Testimonial />
        </div>
      </div>
    </div>
  );
}
