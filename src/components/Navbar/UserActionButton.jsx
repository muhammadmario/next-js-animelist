"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { authUserSession } from "@/lib/auth-libs";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";

export default async function UserActionButton() {
  const session = useSession();
  const user = session?.data?.user;

  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionUrl = user ? "api/auth/signout" : "api/auth/signin";
  return (
    <Button asChild size="lg">
      <Link href={actionUrl}>{actionLabel}</Link>
    </Button>
  );
}
