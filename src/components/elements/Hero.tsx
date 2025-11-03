import heroimg from "../../assets/images/hero.jpg";
import { ArrowRightIcon } from "lucide-react";

const Hero = () => {

  return (
    <div className="px-4 md:px-10 lg:px-10 2xl:px-32 flex justify-center flex-wrap w-full min-h-[75dvh] bg-main pb-10 pt-10 gap-8 items-center">
      {/* Content Section */}
      <section className="flex-1 min-w-[300px] lg:min-w-[350px]">
        <div className="space-y-4 mb-8">
          <p 
            data-aos="fade-right"
            data-aos-delay="100"
            className="text-xs text-[#2950D8] font-bold bg-blue w-fit px-4 py-2 font-poppins shadow-sm rounded-2xl"
          >
            Profesional Web Development
          </p>
          <h1 
            data-aos="fade-right"
            data-aos-delay="200"
            className="font-poppins text-black text-4xl md:text-5xl font-bold"
          >
            Build Your
          </h1>
          <h1 
            data-aos="fade-right"
            data-aos-delay="300"
            className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-[#2070E7] via-[#239AE7] to-[#10ABDA] bg-clip-text text-transparent"
          >
            Dream Website
          </h1>
        </div>
        
        <div className="space-y-6">
          <p 
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-desc font-roboto max-w-md lg:max-w-3xl text-base md:text-lg leading-relaxed"
          >
            Transform your business with modern, elegant, and high-performing
            websites. We create digital experiences that drive results.
          </p>
          <div 
            data-aos="fade-up"
            data-aos-delay="500"
            className="flex flex-wrap gap-4"
          >
            <button className="bg-linear-to-r from-[#239AE7] to-[#10ABDA] px-6 py-3 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-md shadow-slate-400 cursor-pointer font-roboto">
              <a href="#contact">Start Your Project</a>
              <ArrowRightIcon size={18} />
            </button>
            <button className="border border-[#239AE7] text-black rounded-lg px-6 py-2 transition-all duration-300 font-roboto cursor-pointer hover:bg-blue text-sm hover:text-slate-800">
              View Portofolio
            </button>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="w-full md:w-auto flex justify-center lg:justify-end">
        <div 
          data-aos="fade-left"
          data-aos-delay="300"
          className="w-full max-w-md md:max-w-lg lg:max-w-xl 2xl:max-w-2xl"
        >
          <img
            className="w-full h-auto object-cover rounded-2xl shadow-2xl"
            src={heroimg}
            alt="Hero showcase"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;