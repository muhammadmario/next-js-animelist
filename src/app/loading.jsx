"use client";

import React from "react";
import { Puff } from "react-loader-spinner";

export default function loading() {
  return (
    <div className="w-full min-h-[80vh] flex justify-center items-center">
      <Puff
        height="80"
        width="80"
        radius={1}
        color="#000"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
