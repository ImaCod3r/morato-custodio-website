import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronUp } from "react-icons/fa6";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 bottom-6 z-50 flex justify-center pointer-events-none">
      <AnimatePresence>
        {visible && (
          <motion.button
            type="button"
            onClick={() =>
              scroll.scrollToTop({ duration: 600, smooth: "easeInOutQuint" })
            }
            aria-label="Voltar ao topo"
            initial={{ opacity: 0, y: 24, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.8 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            style={{
              boxShadow:
                "inset 0 1px 1px rgba(255,255,255,0.9), inset 0 -2px 4px rgba(0,0,0,0.06), 0 10px 30px rgba(0,0,0,0.15)",
            }}
            className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-gradient-to-b from-white/60 to-white/20 text-gray-700 backdrop-blur-md ring-1 ring-black/5 cursor-pointer"
          >
            <FaChevronUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ScrollToTop;
