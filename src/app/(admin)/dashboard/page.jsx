import { authUserSession } from "@/lib/auth-libs";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const page = async () => {
  const user = await authUserSession();
  console.log(user);
  return (
    <div>
      <Avatar>
        <AvatarImage src={user.image} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default page;
