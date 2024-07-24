"use client";
import { useEffect, useState } from "react";
import { fetchCurrentUser } from "@/helpers/userHelpers";
import Image from "next/image";
import { UserData } from "@/types/UserData";
import UserInfo from "./UserInfo";
import UserMessages from "./UserMessages";
import UsersList from "./UsersList";
import ExpirationModal from "../Modals/ExpirationModal";

const UserProfile = () => {
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  const [expirationModal, setExpirationModal] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<
    "info" | "messages" | "users"
  >("info");

  useEffect(() => {
    const getCurrentUser = async () => {
      const user = await fetchCurrentUser();
      if (!user) {
        setExpirationModal(true);
      } else {
        setCurrentUser(user);
      }
    };

    getCurrentUser();
  }, []);

  return (
    <div>
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
      </div>
      <div className="mt-[-30rem] w-fit p-5 mx-auto relative z-10 bg-white">
        <div className="bg-[#EFF3F6] shadow-lg rounded-lg mx-auto w-[70rem] h-[40rem]">
          <div className="flex justify-center">
            <Image
              src={
                currentUser?.profileImgUrl ||
                "https://i.ibb.co/zZP4TJ3/Default-Profile-Img2.png"
              }
              alt=""
              width={80}
              height={80}
              className="bg-[#EFF3F6] rounded-full mx-auto absolute top-[-4rem] w-32 h-32 border-4 border-[#EFF3F6] transition duration-200 transform hover:scale-110"
            />
          </div>
          <div className="mt-20">
            <div className="font-bold text-center text-3xl text-gray-900">
              {currentUser?.firstName} {currentUser?.lastName}
            </div>
            <div className="my-5 px-6">
              <div className="font-bold text-gray-200 rounded-lg text-center  py-3 bg-blue-900 hover:bg-black hover:text-white">
                Tu perfil
              </div>
            </div>
            <div className="">
              <div className="flex justify-between items-center my-5 px-6">
                <button
                  onClick={() => setActiveSection("info")}
                  className={`hover:bg-blue-300 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3 ${
                    activeSection === "info" ? "bg-gray-100" : ""
                  }`}
                >
                  Mi información
                </button>
                <button
                  onClick={() => setActiveSection("messages")}
                  className={`hover:bg-blue-300 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3 ${
                    activeSection === "messages" ? "bg-gray-100" : ""
                  }`}
                >
                  Mis Mensajes
                </button>
                {currentUser?.role === "ADMIN" && (
                  <button
                    onClick={() => setActiveSection("users")}
                    className={`hover:bg-blue-300 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3 ${
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
                  {activeSection === "messages" && (
                    <div className="">
                      <UserMessages />
                    </div>
                  )}
                  {activeSection === "users" && <UsersList />}
                </div>
                <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {expirationModal && <ExpirationModal />}
    </div>
  );
};

export default UserProfile;
