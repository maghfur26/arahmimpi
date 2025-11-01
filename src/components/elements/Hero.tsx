import { useEffect, useRef } from "react";
import Typed from "typed.js";
import heroimg from "../../assets/images/hero.jpg";
import { ArrowRightIcon } from "lucide-react";

const Hero = () => {
  // Buat referensi ke elemen yang akan diisi efek typing
  const typedElement = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        "wujudkan website impian anda",
        "solusi website profesional",
        "tingkatkan bisnis anda",
      ],
      typeSpeed: 120,
      backSpeed: 60,
      backDelay: 1000,
      loop: true,
    });

    // Bersihkan efek ketika komponen di-unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      className="hero h-full relative before:content-[''] before:absolute before:w-full before:h-full before:bg-black/40 animate-zoomin"
      style={{
        backgroundImage: `url(${heroimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-black/60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-xl lg:max-w-4xl">
          <h1 className="font-poppins mb-5 text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase h-20 lg:h-28 text-main" daa-aos="zoom-in">
            <span ref={typedElement}></span>
          </h1>
          <p className="text-white mb-5 font-roboto text-md md:text-xl lg:text-2xl mt-14 lg:mt-20 font-extralight" data-aos="zoom-in">
            Kami membantu bisnis Anda berkembang dengan solusi website
            profesional dan modern
          </p>
          <button className="bg-main text-body font-bold py-2 px-4 rounded cursor-pointer hover:bg-main/80 transition-all ease-in duration-300 group" data-aos="zoom-in" data-aos-delay="500">
            <a href="#contact" className="flex items-center gap-2">
              Hubungi Kami <ArrowRightIcon className="group-hover:-rotate-45 transition-all ease-in duration-300" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
