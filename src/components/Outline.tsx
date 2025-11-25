import Navbar from "./elements/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./elements/Footer";
import { useEffect } from "react";

const Outline: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Cek apakah ada hash di URL (misal: /?section=contact)
    const params = new URLSearchParams(location.search);
    const section = params.get('section');
    
    if (section) {
      // Delay sedikit untuk memastikan DOM sudah render
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, [location.search]);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="pt-18 md:pt-18">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Outline;