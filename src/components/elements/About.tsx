import Card from "./Card";
import { Check } from "lucide-react";
import Heading from "./Heading";

const About = () => {
  const listfeatures = [
    {
      header: "Desain Modern",
      desc: "Kami menggunakan desain modern dan kreatif untuk menciptakan tampilan yang menarik dan memukau",
    },
    {
      header: "Responsive",
      desc: "Optimasl di semua perangkat, dari mobile hingga desktop",
    },
    {
      header: "SEO Friendly",
      desc: "Kami memastikan website Anda dapat ditemukan dengan mudah oleh pencari mesin",
    },
    {
      header: "Suport Terbaik",
      desc: "Kami menyediakan dukungan teknis yang cepat dan profesional untuk membantu Anda dalam mengelola website Anda",
    },
    {
      header: "Menjunjung Profesionalitas",
      desc: "Kami berkomitmen untuk bekerja dengan profesional dan memastikan website Anda memiliki desain dan fungsionalitas yang sesuai dengan kebutuhan bisnis Anda",
    }
  ];
  return (
    <div className="max-w-[80%] mx-auto pt-30" id="tentang">
      <header>
        <Heading title="Tentang Kami" />
        <p
          className="mb-10 max-w-4xl text-lg lg:text-xl font-thin text-slate-300 leading-8 font-roboto"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          ArahMimpi Digital adalah startup yang berfokus pada pembuatan website
          profesional untuk berbagai kebutuhan bisnis. Kami berkomitmen
          menghadirkan solusi digital yang inovatif, responsif, dan sesuai
          dengan kebutuhan klien. Dengan tim yang berpengalaman, kami siap
          membantu mewujudkan visi digital Anda.
        </p>
      </header>
      <section
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        {listfeatures.map((feature, index) => (
          <Card key={index}>
            <div className="">
              <div className="flex flex-col gap-6 font-poppins">
                <Check className="bg-main w-10 h-10 rounded-full text-body px-2 animate-bounce" />
                <h3 className="font-semibold text-main text-2xl">
                  {feature.header}
                </h3>
              </div>
              <p className="text-sm font-roboto tracking-wide text-desc pt-4">
                {feature.desc}
              </p>
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default About;
