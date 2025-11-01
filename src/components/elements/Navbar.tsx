import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useScrollStore from "../../store/scrollStore";

const Navbar: React.FC = () => {
  const isScrolled = useScrollStore((state) => state.isScrolling);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      useScrollStore.setState({
        isScrolling: scrolled,
        scrollPosition: window.scrollY,
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`w-full flex justify-between items-center py-6 px-4 lg:px-42 transition-all ease-in-out duration-500 fixed top-0 left-0 right-0 z-50 ${
          isScrolled ? "bg-body/70 backdrop-blur shadow-lg" : "bg-body"
        }`}
      >
        {/* Logo */}
        <h1 className="text-main text-2xl font-extrabold font-poppins">
          ArahMimpi Digital
        </h1>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex text-main font-poppins font-semibold md:gap-2 lg:gap-6 text-lg">
            <li>
              <Link
                to="/"
                className="relative hover:text-main/70 before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-main before:transition-all before:duration-300 hover:before:w-full"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Beranda
              </Link>
            </li>
            <li>
              <a
                href="#tentang"
                className="relative hover:text-main/70 before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-main before:transition-all before:duration-300 hover:before:w-full"
              >
                Tentang
              </a>
            </li>
            <li>
              <a
                href="#layanan"
                className="relative hover:text-main/70 before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-main before:transition-all before:duration-300 hover:before:w-full"
              >
                Layanan
              </a>
            </li>
            <li>
              <a
                href="#portofolio"
                className="relative hover:text-main/70 before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-main before:transition-all before:duration-300 hover:before:w-full"
              >
                Portofolio
              </a>
            </li>
            <li>
              <a
                href="#kontak"
                className="relative hover:text-main/70 before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-main before:transition-all before:duration-300 hover:before:w-full"
              >
                Kontak
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block bg-main text-center px-6 py-3 font-poppins rounded-full text-body uppercase cursor-pointer font-semibold hover:bg-main/70 transition-all duration-300 ease-in-out text-sm">
          <Link to="/kontak">Hubungi Kami</Link>
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden text-main z-60"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            // icon close
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            // icon hamburger
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } z-40`}
        onClick={toggleMenu}
      ></div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-body/90 backdrop-blur-xl shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6 p-8 text-main font-poppins font-semibold text-lg">
          <Link
            to="/"
            onClick={() => {
              toggleMenu();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Beranda
          </Link>

          {/* Ganti Link dengan <a> untuk hash navigation */}
          <a href="#tentang" onClick={toggleMenu} className="cursor-pointer">
            Tentang
          </a>

          <a href="#layanan" onClick={toggleMenu} className="cursor-pointer">
            Layanan
          </a>

          <a href="#portofolio" onClick={toggleMenu} className="cursor-pointer">
            Portofolio
          </a>

          <a href="#kontak" onClick={toggleMenu} className="cursor-pointer">
            Kontak
          </a>

          <div className="bg-main px-6 py-3 text-center rounded-full text-body uppercase font-semibold hover:bg-main/70 transition-all">
            <Link to="/kontak" onClick={toggleMenu}>
              Hubungi Kami
            </Link>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
