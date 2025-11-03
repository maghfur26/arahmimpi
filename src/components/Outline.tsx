import Navbar from "./elements/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./elements/Footer";

const Outline: React.FC = () => {
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
