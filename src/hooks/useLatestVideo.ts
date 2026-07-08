import { useEffect, useState } from "react";
import { getLatestMoratoCustodioVideo } from "../services/youtube";

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
                if (!cancelled) {
                    setVideoId(id);
                }
            })
            .catch(() => {
                if (!cancelled) {
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
