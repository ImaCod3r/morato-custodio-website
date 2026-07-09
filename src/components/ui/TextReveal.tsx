import {
  useRef,
  type ComponentPropsWithoutRef,
  type FC,
  type ReactNode,
} from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { cn } from "../../utils/cn";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
}

const textClasses =
  "flex flex-wrap justify-center p-5 text-3xl text-center font-bold leading-8 md:leading-16 md:p-8 md:text-5xl lg:p-10 lg:text-6xl xl:text-7xl";

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    <div ref={sectionRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div className="sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-4 py-20">
        <span className={cn(textClasses, "text-black/20")}>
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </span>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-1 lg:mx-1.5 xl:mx-3">
      <span className="absolute left-0 top-0 text-gray-200">{children}</span>
      <motion.span style={{ opacity: opacity }} className={"text-black"}>
        {children}
      </motion.span>
    </span>
  );
};
