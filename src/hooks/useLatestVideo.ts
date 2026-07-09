import { useEffect, useState } from "react";
import { getLatestMoratoCustodioVideo } from "../services/youtube";

const STORAGE_KEY = "latestMoratoVideoId";

function readCachedVideoId(): string | null {
    try {
        return localStorage.getItem(STORAGE_KEY);
    } catch {
        return null;
    }
}

function writeCachedVideoId(id: string): void {
    try {
        localStorage.setItem(STORAGE_KEY, id);
    } catch {
        // Ignore storage errors (e.g. private mode / quota).
    }
}

interface UseLatestVideoResult {
    videoId: string | null;
    loading: boolean;
    error: boolean;
}

export function useLatestVideo(): UseLatestVideoResult {
    const [videoId, setVideoId] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        let cancelled = false;

        getLatestMoratoCustodioVideo()
            .then((id) => {
                if (cancelled) return;

                if (id) {
                    writeCachedVideoId(id);
                    setVideoId(id);
                    return;
                }

                // No fresh result: fall back to the last known video.
                const cached = readCachedVideoId();
                if (cached) {
                    setVideoId(cached);
                } else {
                    setError(true);
                }
            })
            .catch(() => {
                if (cancelled) return;

                const cached = readCachedVideoId();
                if (cached) {
                    setVideoId(cached);
                } else {
                    setError(true);
                }
            })
            .finally(() => {
                if (!cancelled) {
                    setLoading(false);
                }
            });

        return () => {
            cancelled = true;
        };
    }, []);

    return { videoId, loading, error };
}
