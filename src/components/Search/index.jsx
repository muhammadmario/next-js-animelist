"use client";

import React, { useRef } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function index() {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (e) => {
    const keyword = searchRef.current.value;

    if (!keyword || keyword.trim() == "") return;

    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="max-w-screen-md mx-auto py-3 flex px-4 lg:px-6">
      <Input
        placeholder="Search anime ..."
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
}
