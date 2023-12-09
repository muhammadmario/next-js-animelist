import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeList } from "@/lib/api-libs";
import React from "react";

export default async function page({ params: { keyword } }) {
  const decodedKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeList("anime", `q=${decodedKeyword}`);
  return (
    <>
      <Header title={`Result of ${decodedKeyword}`} />
      <AnimeList data={searchAnime} />
    </>
  );
}
