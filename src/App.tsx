import Header from "./section/Header";
import Hero from "./section/Hero";
import Brands from "./section/Brands.tsx";
import HowItWorks from "./section/HowItWork";
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
    </div>
  );
}
