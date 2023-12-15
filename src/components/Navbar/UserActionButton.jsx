"use client";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function UserActionButton() {
  const session = useSession();
  const user = session?.data?.user;

  return (
    <>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={user.image} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href={"/profile"}>
              <DropdownMenuItem>Profile</DropdownMenuItem>
            </Link>
            <Link href={"/collection"}>
              <DropdownMenuItem>Collection</DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <Link href={"/api/auth/signout"}>
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button asChild size="lg">
          <Link href={"api/auth/signin"}>Sign In</Link>
        </Button>
      )}
    </>
  );
}
