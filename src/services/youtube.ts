const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const SEARCH_QUERY = "Morato Custódio";
const MIN_DURATION_SECONDS = 45 * 60;
const QUOTA_EXCEEDED_STATUS = 429;
const FALLBACK_VIDEO_ID = "Fsi2rDz9GTs";

interface YoutubeSearchItem {
    id: { videoId: string };
}

interface YoutubeSearchResponse {
    items: YoutubeSearchItem[];
}

interface YoutubeVideoItem {
    id: string;
    contentDetails: { duration: string };
}

interface YoutubeVideosResponse {
    items: YoutubeVideoItem[];
}

function parseISO8601Duration(duration: string): number {
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    const hours = Number(match?.[1] ?? 0);
    const minutes = Number(match?.[2] ?? 0);
    const seconds = Number(match?.[3] ?? 0);

    return hours * 3600 + minutes * 60 + seconds;
}

export async function getLatestMoratoCustodioVideo(): Promise<string | null> {
    const searchUrl = new URL("https://www.googleapis.com/youtube/v3/search");
    searchUrl.searchParams.set("q", SEARCH_QUERY);
    searchUrl.searchParams.set("type", "video");
    searchUrl.searchParams.set("order", "date");
    searchUrl.searchParams.set("part", "snippet");
    searchUrl.searchParams.set("maxResults", "10");
    searchUrl.searchParams.set("key", API_KEY);

    const searchResponse = await fetch(searchUrl);
    if (searchResponse.status === QUOTA_EXCEEDED_STATUS) {
        return FALLBACK_VIDEO_ID;
    }
    if (!searchResponse.ok) {
        throw new Error(`YouTube search request failed: ${searchResponse.status}`);
    }

    const searchData: YoutubeSearchResponse = await searchResponse.json();
    const videoIds = searchData.items.map((item) => item.id.videoId);
    if (videoIds.length === 0) {
        return null;
    }

    const videosUrl = new URL("https://www.googleapis.com/youtube/v3/videos");
    videosUrl.searchParams.set("part", "contentDetails,snippet");
    videosUrl.searchParams.set("id", videoIds.join(","));
    videosUrl.searchParams.set("key", API_KEY);

    const videosResponse = await fetch(videosUrl);
    if (videosResponse.status === QUOTA_EXCEEDED_STATUS) {
        return FALLBACK_VIDEO_ID;
    }
    if (!videosResponse.ok) {
        throw new Error(`YouTube videos request failed: ${videosResponse.status}`);
    }

    const videosData: YoutubeVideosResponse = await videosResponse.json();

    const orderedVideos = videoIds
        .map((id) => videosData.items.find((item) => item.id === id))
        .filter((item): item is YoutubeVideoItem => item !== undefined);

    const matchingVideo = orderedVideos.find(
        (item) => parseISO8601Duration(item.contentDetails.duration) >= MIN_DURATION_SECONDS
    );

    return matchingVideo?.id ?? null;
}
