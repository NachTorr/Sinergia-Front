"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import LoginButton from "@/app/api/auth/LoginButton";
import LogoutButton from "@/app/api/auth/LogoutButton";
import { IoMdNotifications } from "react-icons/io";
import CustomButton from "../CustomButton/CustomButton";
import { useAppSelector } from "@/redux/hooks";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [showUserModal, setShowUserModal] = useState<boolean>(false);
  const [notificationsModal, setNotificationsModal] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const currentClickRef = useRef<EventTarget | null>(null);

  const user = useAppSelector((state) => state.user.userActive);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current?.contains(event.target as Node) &&
        event.target !== currentClickRef.current
      ) {
        handleCloseModal();
        handleCloseNotifications();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleShowUserModal = (event: React.MouseEvent<HTMLElement>) => {
    currentClickRef.current = event.target;
    setShowUserModal((prevShowUserModal) => !prevShowUserModal);
  };

  const handleCloseModal = () => {
    setShowUserModal(false);
  };

  const handleShowNotifications = (event: React.MouseEvent<HTMLElement>) => {
    currentClickRef.current = event.target;
    setNotificationsModal((prevShowNotification) => !prevShowNotification);
  };

  const handleCloseNotifications = () => {
    setNotificationsModal(false);
  };

  return (
    <div className="w-screen bg-[#eff3f6] border border-[#dcdde1] text-black shadow-lg">
      <div className="container mx-auto flex items-center h-24 justify-center">
        <a href="" className="flex items-center justify-center">
          <Image
            className="h-16"
            src="https://somossinergia.com.ar/wp-content/uploads/2024/03/Logo-SINERGIA-SIN-Fondo-SOLO-LOGO-121x110.png"
            alt="Logo"
            width={64}
            height={64}
          />
        </a>
        <div className="contents font-semibold text-base lg:text-lg">
          <div className="mx-auto flex items-center cursor-pointer">
            <div className="px-4 py-1 border-dotted border-r-2 border-black hover:text-blue-300 transition-all duration-300">
              <a href="/">Inicio</a>
            </div>
            <div className="px-4 py-1 border-dotted active border-r-2 border-black hover:text-blue-300 transition-all duration-300">
              <a href="/servicios">Servicios</a>
            </div>
            <div className="px-4 py-1 hover:text-blue-300 transition-all duration-300">
              <a href="/contacto">Contacto</a>
            </div>
          </div>
        </div>
        {!user && (
          <div className="flex items-center gap-2">
            <LoginButton />
          </div>
        )}
        {user && (
          <div className="relative">
            <div className="flex items-center">
              {user.profileImgUrl ? (
                <Image
                  onClick={handleShowUserModal}
                  className="cursor-pointer border p-[1px] border-gray-500 rounded-full "
                  src={user.profileImgUrl}
                  width={40}
                  height={40}
                  alt=""
                />
              ) : (
                <div className="cursor-pointer border p-[1px] border-gray-500 rounded-full">
                  <Image
                    src="https://i.ibb.co/zZP4TJ3/Default-Profile-Img2.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
              )}
              <button onClick={handleShowNotifications}>
                <IoMdNotifications
                  size={39}
                  className="p-1 bg-[#eff3f6] border border-gray-500 rounded-full ml-2 cursor-pointer hover:bg-blue-200 hover:border-blue-300 transition-all duration-300"
                />
              </button>
            </div>
            {showUserModal && (
              <div
                className="absolute top-[2.5rem] right-0 w-[16rem] bg-white p-5 rounded shadow-md z-50"
                ref={modalRef}
              >
                <div className="flex flex-col">
                  <div className="flex justify-center">
                    {user.profileImgUrl ? (
                      <Image
                        onClick={handleShowUserModal}
                        className="p-1 rounded-full border-t-[4px] border-t-[#0846B5] border-l-[4px] border-l-[#D91D1F] border-b border-b-gray-300 border-r-[4px] border-r-[#FDFE00]"
                        src={user.profileImgUrl}
                        alt=""
                        width={90}
                        height={90}
                      />
                    ) : (
                      <div className="p-1 rounded-full border-t-[4px] border-t-[#0846B5] border-l-[4px] border-l-[#D91D1F] border-b border-b-gray-300 border-r-[4px] border-r-[#FDFE00]">
                        <Image
                          src="https://i.ibb.co/zZP4TJ3/Default-Profile-Img2.png"
                          alt=""
                          width={90}
                          height={90}
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col items-center ">
                    <h5 className="text-xl font-bold text-[#05264E] my-4">
                      <span className="py-1 border-b border-gray-300">
                        ¡Hola{" "}
                      </span>
                      <span className="py-1 border-b-2 border-blue-300">
                        {user.firstName}!
                      </span>
                    </h5>
                  </div>
                  <div
                    onClick={handleCloseModal}
                    className="py-2 hover:bg-[#eff3f6] hover:border-r-2 border-blue-300 hover:text-blue-500 transition-all duration-300"
                  >
                    <CustomButton name="Tu Perfil" href="/profile" />
                  </div>
                  <div
                    onClick={handleCloseModal}
                    className="py-2 hover:bg-[#eff3f6] hover:border-r-2 border-blue-300 hover:text-blue-500 transition-all duration-300"
                  >
                    <LogoutButton />
                  </div>
                </div>
              </div>
            )}
            {notificationsModal && (
              <div
                ref={modalRef}
                className="absolute flex flex-col right-0 mt-2 w-[18rem] bg-[#f5f6fa] border border-[#dcdde1] shadow-lg rounded-lg z-10"
              >
                <div className="p-4 flex flex-col gap-2">
                  <p className="text-center font-semibold">Notificaciones</p>
                  <CustomButton
                    name="Notificación 1"
                    onClick={() => {}}
                    href={""}
                  />
                  <CustomButton
                    name="Notificación 2"
                    onClick={() => {}}
                    href={""}
                  />
                  <CustomButton
                    name="Notificación 3"
                    onClick={() => {}}
                    href={""}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
