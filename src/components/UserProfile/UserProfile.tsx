"use client";
import { useEffect, useState } from "react";
import { fetchCurrentUser } from "@/helpers/userHelpers";
import Image from "next/image";
import { UserData } from "@/types/UserData";
import UserInfo from "./UserInfo";
import UserMessages from "./UserMessages";
import UsersList from "./UsersList";

const UserProfile = () => {
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  const [activeSection, setActiveSection] = useState<
    "info" | "messages" | "users"
  >("info");

  useEffect(() => {
    const getCurrentUser = async () => {
      const user = await fetchCurrentUser();
      setCurrentUser(user);
    };

    getCurrentUser();
  }, []);

  return (
    <div className="relative w-full h-[45rem] flex items-center justify-center">
      <div className="absolute z-[1] inset-0 bg-gray-900 opacity-20"></div>
      <div className="absolute inset-0 z-0">
        <Image
          src="http://petro.themegum.com/elementor/wp-content/uploads/sites/3/2017/06/slide-2.jpg"
          alt="Background Image"
          className="w-full h-full"
          width={1000}
          height={1000}
        />
      </div>
      <div className="relative z-10  h-[200px] rounded-xl px-10">
        <div className="bg-white relative shadow rounded-lg mx-auto w-[70rem] h-[33rem]">
          <div className="flex justify-center">
            <Image
              src={
                currentUser?.profileImgUrl ||
                "https://i.ibb.co/zZP4TJ3/Default-Profile-Img2.png"
              }
              alt=""
              width={80}
              height={80}
              className="bg-white rounded-full mx-auto absolute top-[-4rem] w-32 h-32 border-4 border-white transition duration-200 transform hover:scale-110"
            />
          </div>
          <div className="mt-20">
            <div className="font-bold text-center text-3xl text-gray-900">
              {currentUser?.firstName} {currentUser?.lastName}
            </div>
            <div className="my-5 px-6">
              <div className="font-bold text-gray-200 rounded-lg text-center  py-3 bg-gray-900 hover:bg-black hover:text-white">
                Tu perfil
              </div>
            </div>
            <div className="">
              <div className="flex justify-between items-center my-5 px-6">
                <button
                  onClick={() => setActiveSection("info")}
                  className={`text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3 ${
                    activeSection === "info" ? "bg-gray-100" : ""
                  }`}
                >
                  Mi información
                </button>
                <button
                  onClick={() => setActiveSection("messages")}
                  className={`text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3 ${
                    activeSection === "messages" ? "bg-gray-100" : ""
                  }`}
                >
                  Mis Mensajes
                </button>
                {currentUser?.role === "ADMIN" && (
                  <button
                    onClick={() => setActiveSection("users")}
                    className={`text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3 ${
                      activeSection === "messages" ? "bg-gray-100" : ""
                    }`}
                  >
                    Ver Usuarios
                  </button>
                )}
              </div>
              <div className="px-6">
                <div className="px-6">
                  {activeSection === "info" && (
                    <UserInfo
                      firstName={currentUser?.firstName || ""}
                      lastName={currentUser?.lastName || ""}
                      email={currentUser?.email || ""}
                    />
                  )}
                  {activeSection === "messages" && <UserMessages />}
                  {activeSection === "users" && <UsersList />}
                </div>
                <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
