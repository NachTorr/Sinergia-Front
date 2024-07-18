"use client";
import React from "react";
import { MdOutlineLogin } from "react-icons/md";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/redux/features/userSlice";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleClickLogout = () => {
    localStorage.removeItem("accessToken");
    dispatch(logoutUser());
  };

  return (
    <a href="/api/auth/logout">
      <button
        onClick={handleClickLogout}
        className="flex items-center font-semibold text-base lg:text-lg"
      >
        <MdOutlineLogin className="font-bold" />
        <div className="ml-1">Salir</div>
      </button>
    </a>
  );
};

export default LogoutButton;
