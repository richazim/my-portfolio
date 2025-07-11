"use server";

import { youtubeSongsRecommendtationsIds } from "@/data/songs";

export const getSongsRecommendation = async () => {
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const ids = youtubeSongsRecommendtationsIds.join(",");

    const YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/videos?id=${ids}&key=${API_KEY}&part=snippet,contentDetails,statistics`;

    const res = await fetch(YOUTUBE_API_URL);
    if (!res.ok) throw new Error("Erreur lors de la récupération des vidéos YouTube");

    const data = await res.json();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return data.items.map((video) => ({
        id: video.id,
        title: video.snippet.title,
        thumbnail: video.snippet.thumbnails.high.url,
    }))
}
