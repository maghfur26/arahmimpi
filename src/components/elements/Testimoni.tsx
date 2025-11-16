import CardQuote from "./Card";
import Heading from "./Heading";
import type { TestimonialUser } from "./Card";

const Testimoni = () => {
  const dataUser: TestimonialUser[] = [
    {
      name: "Rahmat Hidayat",
      job: "CEO",
      company: "Tech Startup Inc",
      quote: "Pelayanan yang luar biasa! Tim sangat profesional dan hasil pekerjaan melebihi ekspektasi kami.",
      avatar: "https://ui-avatars.com/api/?name=Rahmat+Hidayat&background=0891b2&color=fff&size=200",
      rating: 5,
    },
    {
      name: "Firdaus",
      job: "CTO",
      company: "Tech Startup Inc",
      quote: "Proses pengembangan sangat smooth dan komunikatif. Highly recommended!",
      avatar: "https://ui-avatars.com/api/?name=Firdaus&background=06b6d4&color=fff&size=200",
      rating: 5,
    },
    {
      name: "Siti Nurhaliza",
      job: "Marketing Director",
      company: "Digital Agency",
      quote: "Website yang mereka buat sangat membantu meningkatkan brand awareness kami.",
      avatar: "https://ui-avatars.com/api/?name=Siti+Nurhaliza&background=8b5cf6&color=fff&size=200",
      rating: 5,
    },
    {
      name: "Budi Santoso",
      job: "Founder",
      company: "E-Commerce Platform",
      quote: "Investasi terbaik untuk bisnis kami. ROI sangat memuaskan!",
      avatar: "https://ui-avatars.com/api/?name=Budi+Santoso&background=ec4899&color=fff&size=200",
      rating: 5,
    },
  ];

  return (
    <div className="pb-20 mx-4">
      <section className="mt-32 mb-10" id="testimoni">
        <Heading
          section="Testimoni"
          bgColor="bg-blue-200"
          textColor="text-blue-600"
          title="Apa Kata Klien Kami"
          desc1="Jangan hanya percaya pada kata-kata kami - dengarkan beberapa klien kami yang puas"
        />
      </section>
      <section className="mx-auto max-w-7xl overflow-hidden">
        <CardQuote users={dataUser} />
      </section>
    </div>
  );
};

export default Testimoni;