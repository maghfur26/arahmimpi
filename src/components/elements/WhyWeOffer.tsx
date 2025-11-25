import Heading from "./Heading";
import { Zap, Palette, Rocket, Headphones } from "lucide-react";

interface ListPriority {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const WhyWeOffer = () => {
  const listPriority: ListPriority[] = [
    {
      icon: <Zap />,
      title: "Teknologi Terkini",
      desc: "Kami menggunakan teknologi terkini untuk menciptakan situs web yang cepat dan responsif.",
    },
    {
      icon: <Palette />,
      title: "Desain Menarik",
      desc: "Setiap proyek dibuat dengan memperhatikan detail, memastikan desain yang indah dan fungsional.",
    },
    {
      icon: <Rocket />,
      title: "Pengembangan Cepat",
      desc: "Proses pengembangan yang efisien memastikan situs web Anda diluncurkan tepat waktu tanpa mengurangi kualitas.",
    },
    {
      icon: <Headphones />,
      title: "Dukungan Berkelanjutan",
      desc: "Dukungan dan pemeliharaan komprehensif untuk menjaga situs web Anda berjalan lancar setelah peluncuran.",
    },
  ];
  return (
    <div className="mx-4">
      <section className="mt-10 md:mt-24 flex justify-center flex-col items-center mb-18">
        <Heading
          section="Mengapa Pilih Kami"
          bgColor="bg-[#CFFAFE]"
          textColor="text-[#0E7490]"
          title="Kesuksesan Anda, Prioritas Kami"
        />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 transform -translate-y-10">
        {listPriority.map((item, index) => (
          <div
            key={index}
            className="flex justify-center flex-col items-center glass-card p-6"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay={index * 100}
          >
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="bg-gradient w-15 h-15 flex justify-center items-center rounded-full">
                {item.icon}
              </div>
              <h1 className="font-poppins text-xl lg:text-lg 2xl:text-2xl font-semibold text-black text-center">
                {item.title}
              </h1>
            </div>
            <p className="text-md mt-4 font-thin text-desc md:leading-7 font-roboto text-center">
              {item.desc}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default WhyWeOffer;
