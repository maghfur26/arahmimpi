import Hero from "../components/elements/Hero";
import About from "../components/elements/About";
import ArrowScroll from "../components/elements/ArrowScroll";
import Layanan from "../components/elements/Layanan";
import Testimoni from "../components/elements/Testimoni";

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
        <Testimoni />
      </section>
      <section>
        <ArrowScroll />
      </section>
    </div>
  );
};

export default HomePages;
