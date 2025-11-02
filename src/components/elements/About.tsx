import Heading from "./Heading";

const About = () => {
  return (
    <div className="max-w-[80%] mx-auto pt-27" id="about">
      <section className="flex justify-center flex-col items-center mb-18">
        <Heading
          section="Tentang Kami"
          bgColor="bg-[#CFFAFE]"
          textColor="text-[#0E7490]"
          title="Menciptakan Keunggulan Digital"
          desc1="FoundryWeb Digital adalah startup pengembangan web profesional yang berdedikasi untuk mewujudkan impian digital Anda. Kami memadukan kreativitas dengan keahlian teknis untuk menghadirkan situs web yang tak hanya memukau, tetapi juga berkinerja luar biasa."
          desc2="Tim kami ahli dalam merancang solusi web khusus yang disesuaikan dengan kebutuhan bisnis unik Anda. Dari profil perusahaan yang ramping hingga platform e-commerce yang tangguh, kami membangun pengalaman digital yang melibatkan audiens Anda dan mendorong pertumbuhan."
        />
      </section>
    </div>
  );
};

export default About;
