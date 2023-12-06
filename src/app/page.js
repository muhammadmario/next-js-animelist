"use client";

import { useState, useEffect } from "react";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import {
  getAnimeList,
  getNestedAnimeResponse,
  reproduce,
} from "@/lib/api-libs";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [topAnime, setTopAnime] = useState([]);
  const [recommendedAnime, setRecommendedAnime] = useState([]);
  const [displayedTopAnime, setDisplayedTopAnime] = useState(8);
  const [displayedRecommendedAnime, setDisplayedRecommendedAnime] = useState(4);

  const loadMoreTopAnime = () => {
    setDisplayedTopAnime(displayedTopAnime + 8);
  };

  useEffect(() => {
    const fetchData = async () => {
      const topAnimeData = await getAnimeList(
        "top/anime",
        `limit=${displayedTopAnime}`
      );
      setTopAnime(topAnimeData);

      let recommendedAnimeData = await getNestedAnimeResponse(
        "recommendations/anime",
        "entry"
      );
      recommendedAnimeData = reproduce(
        recommendedAnimeData,
        displayedRecommendedAnime
      );
      setRecommendedAnime(recommendedAnimeData);
    };

    fetchData();
  }, [displayedTopAnime, displayedRecommendedAnime]);

  return (
    <main className="w-full pb-6">
      <Header title="Top Anime" />
      <AnimeList data={topAnime} />

      {displayedTopAnime <= 20 && (
        <div className="w-full flex justify-center">
          <Button onClick={loadMoreTopAnime} className="mt-4">
            Load More Top Anime
          </Button>
        </div>
      )}

      <div className="my-6"></div>
      <Header title="Recommended Anime" />
      <AnimeList data={recommendedAnime} />
    </main>
  );
}
