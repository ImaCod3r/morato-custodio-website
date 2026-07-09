import Title from "./ui/Title";
import Reveal from "./ui/Reveal";
import { data } from "../constants";

function Timeline() {
    const { subtitle, title, currentLabel, items } = data.timeline;

    return (
        <section
            id="timeline"
            className="w-full min-h-screen flex flex-col items-center justify-center gap-10 md:gap-16 px-6 py-24 md:py-28"
        >
            <Reveal>
                <Title title={title} subtitle={subtitle} />
            </Reveal>

            <ol className="relative w-full md:max-w-215">
                {items.map((item, idx) => (
                    <li
                        key={idx}
                        className="relative border-l-2 border-gray-200 pl-8 md:pl-10 pb-10 last:pb-0"
                    >
                        <span
                            className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#FFA245] ring-4 ring-white"
                            aria-hidden="true"
                        />

                        <Reveal delay={idx * 0.05}>
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                <p className="text-sm text-gray-650">{item.period}</p>
                                {item.current && (
                                    <span className="rounded-full bg-[#FFA245]/10 px-2.5 py-0.5 text-xs font-semibold text-[#FFA245]">
                                        {currentLabel}
                                    </span>
                                )}
                            </div>

                            <h3 className="mt-1 text-xl font-bold text-gray-950">{item.role}</h3>

                            <p className="text-gray-650">
                                {item.company}
                                <span className="text-gray-400"> · {item.employment}</span>
                            </p>

                            <p className="text-sm text-gray-400">{item.location}</p>

                            {item.description && (
                                <p className="mt-3 text-gray-650">{item.description}</p>
                            )}
                        </Reveal>
                    </li>
                ))}
            </ol>
        </section>
    );
}

export default Timeline;
