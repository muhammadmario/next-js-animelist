import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function AnimeList({ data }) {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {data.data?.map((anime, index) => {
        return (
          <Link href={`/anime/${anime.mal_id}`}>
            <Card key={index}>
              <Image
                src={anime.images.webp.image_url}
                alt="..."
                width={350}
                height={350}
                className="w-full max-h-64 object-cover"
              />
              <CardHeader>
                <CardTitle className="truncate">{anime.title}</CardTitle>
                <CardDescription className="truncate">
                  {anime.synopsis}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-1">
                  {/* <Badge>Rank: {anime.rating}</Badge> */}
                  <Badge>Rank: {anime.rank}</Badge>
                  <Badge>Score: {anime.score}</Badge>
                  <Badge>{anime.year}</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <p>{anime.duration}</p>
              </CardFooter>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
