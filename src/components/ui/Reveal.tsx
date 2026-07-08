import { motion, type Variants } from "framer-motion";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const offset: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 48 },
  down: { y: -48 },
  left: { x: 48 },
  right: { x: -48 },
  none: {},
};

interface RevealProps extends ComponentPropsWithoutRef<typeof motion.div> {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  amount?: number;
}

function Reveal({
  children,
  direction = "up",
  delay = 0,
  amount = 0.3,
  ...props
}: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, ...offset[direction] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
