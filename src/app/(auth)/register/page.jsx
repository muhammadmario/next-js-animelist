import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center min-h-screen">
      <h1 className="text-3xl font-bold">Register</h1>
      <form
        action=""
        className="max-w-screen-sm w-full shadow-lg p-8 rounded-md"
      >
        <div className="mb-4">
          <Label>Username</Label>
          <Input />
        </div>
        <div className="mb-4">
          <Label>Password</Label>
          <Input />
        </div>
        <div className="mb-4">
          <small className="text-center">
            Already have account?{" "}
            <Link href="/login" className="text-blue-500">
              Click here
            </Link>
          </small>
        </div>
        <div className="mb-4">
          <Button>Register</Button>
        </div>
      </form>
    </div>
  );
}
