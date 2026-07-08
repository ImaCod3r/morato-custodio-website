import { useState } from "react";
import Title from "./ui/Title";
import Reveal from "./ui/Reveal";
import { useLatestVideo } from "../hooks/useLatestVideo";

function HearMyVoice () {
    const { videoId, loading, error } = useLatestVideo();
    const [isPlaying, setIsPlaying] = useState(false);
    const [thumbnailSrc, setThumbnailSrc] = useState<string | null>(null);

    return (
        <section id="hear-my-voice" className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-24 md:py-28">
            <Reveal>
                <Title
                    title="minha-voz"
                    subtitle="Ouça"
                />
            </Reveal>

            <Reveal delay={0.1}>
                <p className="mt-6 text-center">Confira o último episódio de um podcast em que participei.</p>
            </Reveal>

            {loading && (
                <div className="w-full max-w-2xl aspect-video rounded-2xl bg-gray-200 animate-pulse mt-10 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gray-300" />
                </div>
            )}

            {!loading && (error || !videoId) && (
                <p className="mt-10">Não foi possível carregar o episódio no momento.</p>
            )}

            {!loading && !error && videoId && (
                <Reveal delay={0.15} className="w-full max-w-2xl aspect-video rounded-2xl overflow-hidden shadow-lg mt-10 relative bg-black">
                    {isPlaying ? (
                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                            title="Episódio mais recente"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ) : (
                        <button
                            type="button"
                            onClick={() => setIsPlaying(true)}
                            className="group w-full h-full relative cursor-pointer"
                            aria-label="Reproduzir episódio"
                        >
                            <img
                                src={thumbnailSrc ?? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                                onError={() => setThumbnailSrc(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`)}
                                alt="Prévia do episódio"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                            <span className="absolute inset-0 flex items-center justify-center">
                                <span className="w-20 h-20 rounded-full bg-[#FFA245] flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                                    <svg viewBox="0 0 24 24" className="w-8 h-8 ml-1 fill-white">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </span>
                            </span>
                        </button>
                    )}
                </Reveal>
            )}
        </section>
    )
}

export default HearMyVoice;
