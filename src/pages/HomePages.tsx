import Hero from "../components/elements/Hero";
import About from "../components/elements/About";
import ArrowScroll from "../components/elements/arrowScroll";
import Layanan from "../components/elements/Layanan";

const HomePages: React.FC = () => {
  return (
    <div className="overflow-hidden relative " >
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Layanan />
      </section>
      <section>
        <ArrowScroll />
      </section>
    </div>
  );
};

export default HomePages;
