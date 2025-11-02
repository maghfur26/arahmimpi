import { useEffect, useState } from "react";
import useScrollStore from "../../store/scrollStore";
import { ChevronsLeftRight } from "lucide-react";


const Navbar: React.FC = () => {
  const isScrolled = useScrollStore((state) => state.isScrolling);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const listMenu: string[] = [
    "About",
    "Service",
    "Portofolio",
    "Contact",
  ]

  const handleClick = () => {
    setIsOpen(false);
  }

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
        className={`w-full flex justify-between items-center py-4 px-4 md:py-6 md:px-20 lg:px-42 fixed top-0 left-0 right-0 z-50 shadow-sm ${
          isScrolled ? "bg-body/70 backdrop-blur-xl shadow-md" : "bg-body"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="bg-gradient px-2 py-2 rounded-lg">
            <ChevronsLeftRight />
          </span>
          <h1 className="bg-linear-to-r from-[#239AE7] to-[#10ABDA] bg-clip-text text-transparent text-xl font-semibold font-poppins">
            FoundryWeb
          </h1>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center text-main/60 font-roboto md:gap-6 text-lg">
            {listMenu.map((item, index) => (
              <li className="hover:text-sky-500 transition-colors ease-linear duration-300 text-desc" key={index}>
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
            <button className="bg-linear-to-r from-[#2070E7] via-[#239AE7] to-[#10ABDA] px-4 py-2 text-white text-sm transition-colors ease-in-out duration-300 rounded-lg cursor-pointer hover:bg-linear-to-r hover:from-[#1c63ce] hover:via-[#1f87cd] hover:to-[#0e95be]">
              <p>Get Started</p>
            </button>
          </ul>
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden text-slate-900 z-60"
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
        <ul className="flex flex-col gap-6 p-8 text-desc font-roboto font-extralight text-lg">
          {listMenu.map((item, index) => (
            <li key={index} onClick={handleClick}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
          <button className="bg-gradient px-4 py-2 text-white text-sm rounded-lg">
            <p>Get Started</p>
          </button>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
