import Card from "./Card";
import Heading from "./Heading";
import { Check } from "lucide-react";

const Layanan: React.FC = () => {
  const listLayanan = [
    {
      heading: "company profile",
      desc: "Membuat website profile perusahaan yang menarik dan profesional",
      price: "Rp 2.000.000 - Rp 5.000.000",
      features: [
        "Desain Custom",
        "Responsive Design",
        "Contact Form",
        "Google Maps",
        "Admin Panel",
        "Dll",
      ],
    },
    {
      heading: "e-commerce",
      desc: "Toko online lengkap dengan sistem pembayaran",
      price: "Rp 8.000.000 - Rp 20.000.000",
      features: [
        "Desain Custom",
        "Payment Gateway",
        "Shoping Cart",
        "Order Management",
        "Product Management",
        "Custom Dashboard",
        "Dll",
      ],
    },
    {
      heading: "landing page",
      desc: "Halaman promosi yang menarik dan konversi tinggi",
      price: "Rp 1.500.000 - Rp 4.000.000",
      features: [
        "Single Page Design",
        "Call to Action",
        "Responsive Design",
        "Contact Form",
        "Fast Loading",
        "Dll",
      ],
    },
    {
      heading: "blog/news",
      desc: "Platform blog atau portal berita profesional",
      price: "Rp 4.000.000 - Rp 10.000.000",
      features: [
        "CMS Integration",
        "Article Management",
        "Category & Tags",
        "Comment System",
        "Custom Dashboard",
        "Dll",
      ],
    },
    {
      heading: "portofolio",
      desc: "Website portofolio untuk showcase karya Anda",
      price: "Rp 1.000.000 - Rp 5.000.000",
      features: [
        "Gallery Custom",
        "Project Showcase",
        "Contact Form",
        "Filtering Options",
        "Lightbox View",
        "Dll",
      ],
    },
    {
      heading: "custom website",
      desc: "Solusi website khusus untuk kebutuhan Anda",
      price: "Mulai dari Rp 6.000.000",
      features: [
        "Full Customization",
        "Unlimited Features",
        "Maintance & Support",
        "Custom Dashboard",
        "Payment Gateway",
        "Dll",
      ],
    },
  ];
  return (
    <div className="pt-28 max-w-[80%] mx-auto" id="layanan">
      <header>
        <Heading title="Layanan Kami" />
        <p
          className="font-roboto pb-10 text-lg lg:text-xl font-thin text-desc leading-8"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          Pilihan lengkap solusi website untuk berbagai kebutuhan bisnis Anda
        </p>
      </header>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {listLayanan.map((item) => (
            <div data-aos="fade-up" data-aos-duration="1000">
              <Card height="h-full">
                <h2 className="card-title text-3xl font-poppins uppercase text-main">
                  {item.heading}
                </h2>
                <p className="font-roboto text-desc pb-4 mt-2">{item.desc}</p>
                <p className="font-roboto md:text-xl border-main/20 border-y-2 text-main leading-8 font-bold">
                  {item.price}
                </p>
                <div className="flex flex-col gap-2 mt-4">
                  {item.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="mr-2 text-main" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Layanan;
