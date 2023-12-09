import { getAnimeList } from "@/lib/api-libs";
import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default async function page({ params: { id } }) {
  const data = await getAnimeList(`anime/${id}`);
  const anime = data.data;

  const dataCharacter = await getAnimeList(`anime/${id}/characters`);
  const characters = dataCharacter.data;

  return (
    <div className="max-w-screen-xl mx-auto px-6 pb-6">
      <h1 className="text-2xl font-bold text-center my-3">{anime.title}</h1>
      <h2 className="text-xl text-center my-3">{anime.title_japanese}</h2>
      <div className="flex mx-auto items-center justify-center gap-2">
        <Badge className="text-md">Rank: {anime.rank}</Badge>
        <Badge className="text-md">Score: {anime.score}</Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        <div>
          <Image
            src={anime.images.webp.large_image_url}
            alt={anime.title}
            width={250}
            height={550}
            className="w-full bg-black h-96 object-contain"
          />
        </div>
        <div>
          <h3 className="font-medium">Synopsis: </h3>
          <div className="w-full border-b-2 my-2"></div>
          <p className="text-justify">{anime.synopsis}</p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-medium">Background: </h3>
        <div className="w-full border-b-2 my-2"></div>
        {anime.background ? (
          <p className="text-justify">{anime.background}</p>
        ) : (
          <p>No background found</p>
        )}
      </div>
      <div className="flex flex-wrap gap-3 mt-6">
        <Badge className="text-md">Duration: {anime.duration}</Badge>
        <Badge className="text-md">Rating: {anime.rating}</Badge>
        <Badge className="text-md">Relase: {anime.year}</Badge>
        <Badge className="text-md">Favorites: {anime.favorites}</Badge>
        <Badge className="text-md">Season: {anime.season}</Badge>
      </div>

      <h3 className="mt-8">Characters</h3>
      <div className="w-full border-b-2 my-2"></div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-y-2">
        {characters.map((character, index) => (
          <div className="flex w-32 relative">
            <Image
              src={character.character.images.webp.image_url}
              alt={character.character.name}
              width={250}
              height={550}
              className=" bg-black w-32 h-32 object-contain"
            />
            <h4 className="absolute bottom-0 bg-slate-600 text-white text-sm truncate overflow-hidden">
              {character.character.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}
