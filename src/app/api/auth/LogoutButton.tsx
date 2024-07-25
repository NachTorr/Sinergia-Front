"use client";
import React from "react";
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
        className="bg-blue-900 hover:bg-[#46C2CA] rounded-md px-4 py-2 text-white w-24"
      >
        <div className="">Salir</div>
      </button>
    </a>
  );
};

export default LogoutButton;
