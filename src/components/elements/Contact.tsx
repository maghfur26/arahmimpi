import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import Heading from "./Heading";

interface DataContact {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const Contact = () => {
  const dataContact: DataContact[] = [
    {
      icon: <MailIcon />,
      title: "Email",
      desc: "maghfurhasani9@gmail.com",
    },
    {
      icon: <PhoneIcon />,
      title: "Telepon",
      desc: "+6285727522179",
    },
    {
      icon: <MapPinIcon />,
      title: "Alamat",
      desc: "Pemalang, Jawa Tengah, Indonesia",
    },
  ];

  return (
    <div className="bg-main py-20 md:py-32 px-8 relative overflow-hidden" id="contact">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-cyan-400/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-cyan-400/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-down">
          <Heading
            title="Mari Memulai Proyek Anda"
            section="Hubungi kami"
            desc1="Siap mewujudkan visi Anda?"
            desc2="Hubungi kami hari ini."
            bgColor="bg-[#CFFAFE]"
            textColor="text-[#0E7490]"
          />
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {dataContact.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="relative group"
            >
              {/* Card Background with Gradient Border Effect */}
              <div className="absolute -inset-0.5 bg-gradient rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
              
              {/* Card Content */}
              <div className="relative bg-white rounded-3xl p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 md:h-58">
                {/* Icon Container */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-gradient rounded-2xl flex items-center justify-center mx-auto transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                  {/* Icon Glow Effect */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                </div>
                
                {/* Text Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-black mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed wrap-break-words">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient rounded-full group-hover:w-3/4 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div 
          className="mt-16 text-center" 
          data-aos="fade-up" 
          data-aos-delay="500"
        >
          <div className="inline-block bg-white/50 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
            <p className="text-gray-700 font-medium">
              💬 Kami siap membantu mewujudkan proyek Anda
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;