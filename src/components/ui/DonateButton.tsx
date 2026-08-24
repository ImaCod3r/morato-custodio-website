import { motion } from "framer-motion";
import { FaPaypal } from "react-icons/fa6";
import { data } from "../../constants";

function DonateButton() {
  const { label, ariaLabel, href } = data.donate;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        initial={{ opacity: 0, y: 24, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: "spring", stiffness: 320, damping: 22, delay: 0.4 }}
        style={{
          boxShadow:
            "inset 0 1px 1px rgba(255,255,255,0.35), 0 10px 30px rgba(0,0,0,0.2)",
        }}
        className="flex items-center gap-2 rounded-full bg-[#0070BA] hover:bg-[#005ea6] px-4 py-3 text-white font-medium ring-1 ring-black/5 transition-colors"
      >
        <FaPaypal size={20} />
        <span className="text-sm">{label}</span>
      </motion.a>
    </div>
  );
}

export default DonateButton;
