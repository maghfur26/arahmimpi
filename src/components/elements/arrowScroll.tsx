import useScrollStore from "../../store/scrollStore";
import { ArrowUp } from "lucide-react";

const ArrowScroll: React.FC = () => {
    const isScrolling = useScrollStore((state) => state.isScrolling);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            className={`cursor-pointer fixed bottom-10 right-10 z-50 bg-main text-body p-4 rounded-full shadow-lg transition-all ease-in-out duration-300 hover:bg-main/80 ${
                isScrolling ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
            }`}
            onClick={handleScrollToTop}
            aria-label="Scroll to top"
        >
            <ArrowUp className="w-6 h-6" />
        </button>
    );
};

export default ArrowScroll;