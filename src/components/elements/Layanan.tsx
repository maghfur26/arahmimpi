import Heading from "./Heading";
import {
  Building,
  ShoppingCart,
  PanelsTopLeft,
  Newspaper,
  BookImage,
  ChevronsLeftRight,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import WhyWeOffer from "./WhyWeOffer";

interface ListService {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const Layanan: React.FC = () => {
  const listService: ListService[] = [
    {
      icon: <Building />,
      title: "Company Profile",
      desc: "Situs web perusahaan profesional yang membangun kehadiran digital merek Anda dengan desain elegan dan konten yang menarik.",
    },
    {
      icon: <ShoppingCart />,
      title: "E-Commerce",
      desc: "Platform e-commerce tangguh yang membantu bisnis Anda berkembang dengan cepat dan memperluas pasar.",
    },
    {
      icon: <PanelsTopLeft />,
      title: "Landing Page",
      desc: "Situs web khusus yang memukau dan memunculkan potensi bisnis Anda dengan desain yang menarik.",
    },
    {
      icon: <Newspaper />,
      title: "Blog",
      desc: "Situs web blog profesional yang memperkenalkan konten Anda secara visual dan interaktif.",
    },
    {
      icon: <BookImage />,
      title: "Portfolio",
      desc: "Situs web portfolio profesional yang memperkenalkan karya Anda secara visual dan interaktif.",
    },
    {
      icon: <ChevronsLeftRight />,
      title: "Custom Website",
      desc: "Situs web khusus yang memukau dan memunculkan potensi bisnis Anda dengan desain yang menarik.",
    },
  ];

  return (
    <div className="bg-main py-10" id="service">
      <div className="max-w-7xl mx-auto px-8 md:px-6 lg:px-8">
        <header>
          <Heading
            title="Apa Yang Kami Tawarkan"
            desc1="Layanan pengembangan web komprehensif untuk mewujudkan visi Anda"
            section="Layanan Kami"
            bgColor="bg-[#cfe0f7]"
            textColor="text-blue-600"
          />
        </header>
        
        <section className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {listService.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm transition-all ease-in-out duration-500 hover:shadow-xl group cursor-pointer border hover:border-2 hover:border-blue-400"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                <div className="flex flex-col mb-4">
                  <div className="bg-gradient px-4 w-fit py-4 rounded-xl mb-4 group-hover:scale-110 transition-all ease-in-out duration-500">
                    {item.icon}
                  </div>
                  <h2 className="text-lg font-semibold text-black font-roboto group-hover:text-blue-600 transition-all ease-in-out duration-500">
                    {item.title}
                  </h2>
                </div>
                <p className="text-gray-600 mb-4 font-roboto">{item.desc}</p>
                <Link
                  className="text-blue-500 flex gap-2 hover:text-blue-700 w-fit font-roboto group-hover:transform group-hover:translate-x-1 transition-all ease-in-out duration-500"
                  to={"#"}
                >
                  <span>Learn More</span>
                  <span>
                    <ArrowRight />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-20">
        <WhyWeOffer />
      </div>
    </div>
  );
};

export default Layanan;