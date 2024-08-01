"use client";
import { useEffect, useState } from "react";
import { fetchCurrentUser, TokenExpiredError } from "@/helpers/userHelpers";
import Image from "next/image";
import { UserData } from "@/types/UserData";
import UserInfo from "./UserInfo";
import UserMessages from "./UserMessages";
import UsersList from "./UsersList";
import ExpirationModal from "../Modals/ExpirationModal";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const UserProfile = () => {
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  const [expirationModal, setExpirationModal] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<
    "info" | "messages" | "users"
  >("info");

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const user = await fetchCurrentUser();
        setCurrentUser(user);
      } catch (error) {
        if (error instanceof TokenExpiredError) {
          setExpirationModal(true);
        } else {
          toast.error("Error al obtener datos del usuario.");
        }
      }
    };

    getCurrentUser();
  }, []);

  return (
    <div>
      <div className="relative w-full h-[23rem] md:h-[45rem] flex items-center justify-center">
        <div className="absolute z-[1] inset-0 h-96 md:h-[45rem] bg-gray-900 opacity-30"></div>
        <div className="absolute inset-0 z-0">
          <Image
            src="http://petro.themegum.com/elementor/wp-content/uploads/sites/3/2017/06/slide-2.jpg"
            alt="Background Image"
            className="object-cover object-top h-96 md:h-full md:w-full"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <div className="mt-[-10rem] md:mt-[-30rem] p-2 md:p-5 relative z-10 bg-white">
        <div className="bg-[#EFF3F6] shadow-lg rounded-lg lg:mx-auto w-full xl:w-[70rem] h-[40rem]">
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
            <div className="my-5 md:px-6">
              <div className="font-bold text-gray-200 rounded-lg text-center py-3 bg-blue-900">
                Tu perfil
              </div>
            </div>
            <div className="">
              <div className="flex justify-between items-center my-5 lg:px-6 ">
                <button
                  onClick={() => setActiveSection("info")}
                  className={`hover:bg-blue-900 hover:text-white hover:font-semibold rounded transition-all duration-300 font-medium text-sm text-center w-full py-3 ${
                    activeSection === "info" ? "bg-gray-100" : ""
                  }`}
                >
                  Mi información
                </button>
                <button
                  onClick={() => setActiveSection("messages")}
                  className={`hover:bg-blue-900 hover:text-white hover:font-semibold rounded transition-all duration-300 font-medium text-sm text-center w-full py-3 ${
                    activeSection === "messages" ? "bg-gray-100" : ""
                  }`}
                >
                  Mis Mensajes
                </button>
                {currentUser?.role === "ADMIN" && (
                  <button
                    onClick={() => setActiveSection("users")}
                    className={`hover:bg-blue-900 hover:text-white hover:font-semibold rounded transition-all duration-300 font-medium text-sm text-center w-full py-3 ${
                      activeSection === "messages" ? "bg-gray-100" : ""
                    }`}
                  >
                    Ver Usuarios
                  </button>
                )}
              </div>
              <div className="lg:px-6 ">
                <div className="lg:px-6">
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
      {expirationModal && (
        <ExpirationModal setExpirationModal={setExpirationModal} />
      )}
    </div>
  );
};

export default UserProfile;
