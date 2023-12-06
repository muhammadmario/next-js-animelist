import React from "react";

function Header({ title }) {
  return (
    <div className="max-w-screen-xl px-4 mx-auto mb-3">
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  );
}

export default Header;
