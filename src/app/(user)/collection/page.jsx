import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const page = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-6 pb-6">
      <h3 className="text-2xl font-bold text-center my-3">My Collection</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ">
        <Link href={``}>
          <Card>
            <Image
              src={""}
              alt="..."
              width={350}
              height={350}
              className="w-full max-h-64 object-cover"
            />
            <CardHeader>
              <CardTitle className="truncate">Lorem</CardTitle>
              <CardDescription className="truncate">Lorem</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-1">
                <Badge>Rank: Lorem</Badge>
                <Badge>Score: Lorem</Badge>
                <Badge>Lorem</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <p>Lorem</p>
            </CardFooter>
          </Card>
        </Link>
        <Link href={``}>
          <Card>
            <Image
              src={""}
              alt="..."
              width={350}
              height={350}
              className="w-full max-h-64 object-cover"
            />
            <CardHeader>
              <CardTitle className="truncate">Lorem</CardTitle>
              <CardDescription className="truncate">Lorem</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-1">
                <Badge>Rank: Lorem</Badge>
                <Badge>Score: Lorem</Badge>
                <Badge>Lorem</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <p>Lorem</p>
            </CardFooter>
          </Card>
        </Link>
        <Link href={``}>
          <Card>
            <Image
              src={""}
              alt="..."
              width={350}
              height={350}
              className="w-full max-h-64 object-cover"
            />
            <CardHeader>
              <CardTitle className="truncate">Lorem</CardTitle>
              <CardDescription className="truncate">Lorem</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-1">
                <Badge>Rank: Lorem</Badge>
                <Badge>Score: Lorem</Badge>
                <Badge>Lorem</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <p>Lorem</p>
            </CardFooter>
          </Card>
        </Link>
        <Link href={``}>
          <Card>
            <Image
              src={""}
              alt="..."
              width={350}
              height={350}
              className="w-full max-h-64 object-cover"
            />
            <CardHeader>
              <CardTitle className="truncate">Lorem</CardTitle>
              <CardDescription className="truncate">Lorem</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-1">
                <Badge>Rank: Lorem</Badge>
                <Badge>Score: Lorem</Badge>
                <Badge>Lorem</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <p>Lorem</p>
            </CardFooter>
          </Card>
        </Link>
      </div>
    </section>
  );
};

export default page;
