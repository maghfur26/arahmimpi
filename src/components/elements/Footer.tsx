import { ChevronsLeftRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
      <aside>
        <div className="flex mb-4">
          <div className="bg-gradient w-15 h-15 grid place-items-center rounded-xl">
            <ChevronsLeftRight className="min-w-full h-full" />
          </div>
          <div className="grid place-items-center ml-4 h-15 w-15">
            <h1 className="font-poppins font-semibold text-2xl bg-linear-to-r from-[#2070E7] via-[#239AE7] to-[#10ABDA] bg-clip-text text-transparent">
              FoundryWeb
            </h1>
          </div>
        </div>
        <p className="font-roboto">
          Building digital experiences <br /> that drive success.
        </p>
      </aside>
      <nav className="font-roboto">
        <h6 className="footer-title">Quick Links</h6>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Service</a>
        <a className="link link-hover">Portofolio</a>
      </nav>
      <nav className="font-roboto">
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Company Profile</a>
        <a className="link link-hover">E-Commerce</a>
        <a className="link link-hover">Landing Page</a>
        <a className="link link-hover">Blog/News</a>
      </nav>
    </footer>
  );
};

export default Footer;
