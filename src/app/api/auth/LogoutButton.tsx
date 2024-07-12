import React from "react";
import { MdOutlineLogin } from "react-icons/md";

const LogoutButton = () => {
  return (
    <button className="">
      <a
        href="/api/auth/logout"
        className="flex items-center font-semibold text-base lg:text-lg hover:text-blue-300 transition-all duration-300"
      >
        <MdOutlineLogin className="font-bold" />
        <div className="ml-1">Salir</div>
      </a>
    </button>
  );
};

export default LogoutButton;
