import { useParams, Link } from "react-router-dom";
import {
  Building,
  ShoppingCart,
  PanelsTopLeft,
  Newspaper,
  BookImage,
  ChevronsLeftRight,
  ArrowLeft,
  CheckCircle,
  Sparkles,
  Zap,
  Star,
  TrendingUp,
  Shield,
  Clock,
} from "lucide-react";
import { useEffect } from "react";

interface ServiceDetail {
  icon: React.ReactNode;
  title: string;
  desc: string;
  slug: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  price: string;
  color: string;
  linear: string;
}

const DetailPages = () => {
  const { slug } = useParams<{ slug: string }>();

  const servicesData: ServiceDetail[] = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Company Profile",
      desc: "Situs web perusahaan profesional yang membangun kehadiran digital merek Anda dengan desain elegan dan konten yang menarik.",
      slug: "company-profile",
      longDescription:
        "Website Company Profile adalah representasi digital dari identitas perusahaan Anda. Kami menciptakan website yang tidak hanya menarik secara visual, tetapi juga efektif dalam mengkomunikasikan nilai-nilai perusahaan, produk, dan layanan Anda kepada audiens target.",
      features: [
        "Desain responsif untuk semua perangkat",
        "Halaman About Us yang menarik",
        "Showcase produk dan layanan",
        "Integrasi dengan media sosial",
        "Form kontak dan peta lokasi",
        "Panel admin untuk update konten",
      ],
      benefits: [
        "Meningkatkan kredibilitas perusahaan",
        "Memperluas jangkauan pasar",
        "Meningkatkan kepercayaan pelanggan",
        "Memudahkan calon klien menemukan informasi",
      ],
      price: "Mulai dari Rp 1.500.000",
      color: "from-blue-600 to-cyan-500",
      linear: "bg-linear-to-br from-blue-50 to-cyan-50",
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-Commerce",
      desc: "Platform e-commerce tangguh yang membantu bisnis Anda berkembang dengan cepat dan memperluas pasar.",
      slug: "e-commerce",
      longDescription:
        "Solusi e-commerce lengkap yang dirancang untuk mengubah bisnis Anda menjadi toko online yang sukses. Dengan fitur-fitur canggih dan antarmuka yang user-friendly, kami membantu Anda meningkatkan penjualan dan mengelola bisnis online dengan mudah.",
      features: [
        "Katalog produk dengan pencarian canggih",
        "Sistem keranjang belanja dan checkout",
        "Integrasi payment gateway",
        "Manajemen inventori otomatis",
        "Dashboard admin komprehensif",
        "Review dan rating produk",
      ],
      benefits: [
        "Penjualan 24/7 tanpa batas waktu",
        "Jangkauan pasar lebih luas",
        "Otomasi proses bisnis",
        "Analisis penjualan real-time",
      ],
      price: "Mulai dari Rp 8.000.000",
      color: "from-purple-600 to-pink-500",
      linear: "bg-linear-to-br from-purple-50 to-pink-50",
    },
    {
      icon: <PanelsTopLeft className="w-8 h-8" />,
      title: "Landing Page",
      desc: "Situs web khusus yang memukau dan memunculkan potensi bisnis Anda dengan desain yang menarik.",
      slug: "landing-page",
      longDescription:
        "Landing page yang dioptimalkan untuk konversi tinggi. Dirancang khusus untuk kampanye marketing, peluncuran produk, atau promosi tertentu dengan fokus pada call-to-action yang kuat.",
      features: [
        "Desain fokus pada konversi",
        "Loading cepat dan optimal",
        "Form capture leads",
        "A/B testing ready",
        "SEO optimized",
        "Integrasi analytics",
      ],
      benefits: [
        "Konversi leads lebih tinggi",
        "Fokus pada satu tujuan marketing",
        "ROI yang terukur",
        "Setup cepat untuk kampanye",
      ],
      price: "Mulai dari Rp 600.000",
      color: "from-orange-600 to-red-500",
      linear: "bg-linear-to-br from-orange-50 to-red-50",
    },
    {
      icon: <Newspaper className="w-8 h-8" />,
      title: "Blog",
      desc: "Situs web blog profesional yang memperkenalkan konten Anda secara visual dan interaktif.",
      slug: "blog",
      longDescription:
        "Platform blog modern yang memudahkan Anda berbagi konten, membangun audiens, dan meningkatkan SEO. Dengan sistem manajemen konten yang intuitif dan desain yang menarik.",
      features: [
        "CMS mudah digunakan",
        "Kategori dan tag artikel",
        "Sistem komentar",
        "SEO friendly",
        "Share ke media sosial",
        "Newsletter subscription",
      ],
      benefits: [
        "Meningkatkan brand awareness",
        "Membangun otoritas di industri",
        "Traffic organik lebih tinggi",
        "Engagement dengan audiens",
      ],
      price: "Mulai dari Rp 4.000.000",
      color: "from-green-600 to-emerald-500",
      linear: "bg-linear-to-br from-green-50 to-emerald-50",
    },
    {
      icon: <BookImage className="w-8 h-8" />,
      title: "Portfolio",
      desc: "Situs web portfolio profesional yang memperkenalkan karya Anda secara visual dan interaktif.",
      slug: "portfolio",
      longDescription:
        "Website portfolio yang showcase karya terbaik Anda dengan cara yang menarik dan profesional. Cocok untuk freelancer, fotografer, desainer, dan creative professional.",
      features: [
        "Gallery karya interaktif",
        "Lightbox untuk gambar",
        "Kategori project",
        "Halaman detail project",
        "Form kontak klien",
        "Testimonial section",
      ],
      benefits: [
        "Tampilkan karya terbaik",
        "Tingkatkan kredibilitas profesional",
        "Mudah mendapat klien baru",
        "Brand personal yang kuat",
      ],
      price: "Mulai dari Rp 3.500.000",
      color: "from-indigo-600 to-purple-500",
      linear: "bg-linear-to-br from-indigo-50 to-purple-50",
    },
    {
      icon: <ChevronsLeftRight className="w-8 h-8" />,
      title: "Custom Website",
      desc: "Situs web khusus yang memukau dan memunculkan potensi bisnis Anda dengan desain yang menarik.",
      slug: "custom-website",
      longDescription:
        "Solusi website fully customized sesuai kebutuhan spesifik bisnis Anda. Kami mengembangkan website dari nol dengan fitur-fitur yang disesuaikan dengan workflow dan kebutuhan unik perusahaan Anda.",
      features: [
        "Desain 100% custom",
        "Fitur sesuai kebutuhan bisnis",
        "Integrasi sistem existing",
        "Scalable architecture",
        "Full documentation",
        "Training dan support",
      ],
      benefits: [
        "Solusi tepat untuk bisnis unik",
        "Tidak terbatas fitur template",
        "Competitive advantage",
        "Efisiensi operasional maksimal",
      ],
      price: "Harga sesuai kompleksitas project",
      color: "from-rose-600 to-orange-500",
      linear: "bg-linear-to-br from-rose-50 to-orange-50",
    },
  ];

  const currentService = servicesData.find((service) => service.slug === slug);

  if (!currentService) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100">
        <div className="text-center p-8">
          <div className="text-8xl mb-4">😕</div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Layanan tidak ditemukan
          </h2>
          <p className="text-gray-600 mb-6">
            Maaf, layanan yang Anda cari tidak tersedia
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all"
          >
            <ArrowLeft size={20} />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div
      className={`min-h-screen ${currentService.linear} relative overflow-hidden`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-8 group transition-all"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="font-medium">Kembali ke Beranda</span>
        </Link>

        {/* Hero Section */}
        <div
          className={`bg-linear-to-r ${currentService.color} rounded-3xl shadow-2xl overflow-hidden mb-8 transform hover:scale-[1.01] transition-transform duration-300`}
        >
          <div className="p-8 md:p-16 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-2xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-6">
                <div className="bg-white/20 backdrop-blur-sm p-5 rounded-2xl shadow-xl transform hover:rotate-6 transition-transform">
                  {currentService.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-yellow-300" />
                    <span className="text-white/90 text-sm font-semibold uppercase tracking-wider">
                      Premium Service
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
                    {currentService.title}
                  </h1>
                </div>
              </div>
              <p className="text-white/90 text-lg md:text-xl max-w-3xl leading-relaxed">
                {currentService.desc}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 max-w-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <TrendingUp className="w-6 h-6 text-white mx-auto mb-2" />
                  <div className="text-white text-sm font-semibold">
                    Fast Delivery
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <Shield className="w-6 h-6 text-white mx-auto mb-2" />
                  <div className="text-white text-sm font-semibold">
                    Quality Assured
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <Clock className="w-6 h-6 text-white mx-auto mb-2" />
                  <div className="text-white text-sm font-semibold">
                    24/7 Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-linear-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Tentang Layanan Ini
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                {currentService.longDescription}
              </p>
            </div>

            {/* Features Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-linear-to-r from-green-500 to-emerald-500 p-2 rounded-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Fitur Unggulan
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {currentService.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-linear-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all transform hover:scale-105"
                  >
                    <CheckCircle
                      className="text-green-500 flex-shrink-0 mt-1"
                      size={22}
                    />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-linear-to-r from-orange-500 to-red-500 p-2 rounded-lg">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Manfaat untuk Bisnis Anda
                </h2>
              </div>
              <div className="space-y-4">
                {currentService.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-5 rounded-xl bg-linear-to-br from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 transition-all transform hover:translate-x-2"
                  >
                    <div className="bg-linear-to-br from-orange-500 to-red-500 rounded-full p-2 flex-shrink-0">
                      <CheckCircle className="text-white" size={18} />
                    </div>
                    <span className="text-gray-700 font-medium text-lg">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Pricing & CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Pricing Card */}
              <div
                className={`bg-linear-to-br ${currentService.color} rounded-2xl shadow-2xl p-8 text-white transform hover:scale-105 transition-transform`}
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm font-semibold">Special Offer</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Investasi</h3>
                  <div className="text-4xl font-bold mb-2">
                    {currentService.price}
                  </div>
                  <p className="text-white/80 text-sm">
                    Harga terjangkau untuk hasil maksimal
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle size={18} />
                    <span>Gratis Konsultasi</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle size={18} />
                    <span>Revisi 3x</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle size={18} />
                    <span>Garansi 30 Hari</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle size={18} />
                    <span>Free Maintenance 3 Bulan</span>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="block w-full bg-white text-gray-800 text-center px-6 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
                >
                  Mulai Sekarang
                </Link>

                <p className="text-center text-white/80 text-xs mt-4">
                  *Harga dapat berubah sesuai kompleksitas project
                </p>
              </div>

              {/* Contact Info Card */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="font-bold text-lg mb-4 text-gray-800">
                  Butuh Konsultasi?
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Tim kami siap membantu Anda menemukan solusi terbaik untuk
                  bisnis Anda.
                </p>
                <Link
                  to="/?section=contact"
                  className="block w-full bg-linear-to-r from-blue-600 to-purple-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPages;
