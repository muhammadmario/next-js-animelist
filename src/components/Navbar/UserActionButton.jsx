import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function UserActionButton() {
  return (
    <Button asChild size="lg">
      <Link href="/login">Login</Link>
    </Button>
  );
}
