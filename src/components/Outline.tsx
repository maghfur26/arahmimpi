import Navbar from "./elements/Navbar";
import { Outlet } from "react-router-dom";

const Outline: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="pt-20 md:pt-28 pb-6">
        <Outlet />
      </main>
    </>
  );
};

export default Outline;
