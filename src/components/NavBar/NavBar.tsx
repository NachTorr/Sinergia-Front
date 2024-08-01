"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import LoginButton from "@/app/api/auth/LoginButton";
import CustomButton from "../CustomButton/CustomButton";
import { useAppSelector } from "@/redux/hooks";
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropUp,
  MdOutlineLogin,
} from "react-icons/md";
import LogoutModal from "../Modals/LogoutModal";
import Link from "next/link";

const NavBar = () => {
  const [showUserModal, setShowUserModal] = useState<boolean>(false);
  const [logoutModal, setLogoutModal] = useState(false);
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

  const handleShowLogoutModal = () => {
    setShowUserModal(false);
    setLogoutModal(true);
  };

  return (
    <div className="fixed top-0 left-0 w-screen z-20 bg-[#eff3f6] border border-[#dcdde1] text-black shadow-lg">
      <div className="flex items-center h-24 justify-center">
        <div className="flex items-center justify-center px-2">
          <Image
            className="h-10 w-10 md:h-16 md:w-16"
            src="https://somossinergia.com.ar/wp-content/uploads/2024/03/Logo-SINERGIA-SIN-Fondo-SOLO-LOGO-121x110.png"
            alt="Logo"
            width={64}
            height={64}
          />
        </div>
        <div className="contents font-semibold text-sm md:text-lg">
          <div className="px-2 md:w-[70%] flex items-center justify-center cursor-pointer">
            <Link href={"/"}>
              <div className="px-2 md:px-4 py-1 border-dotted border-r-2 border-black hover:text-[#46C2CA] transition-all duration-300">
                <div>Inicio</div>
              </div>
            </Link>
            <Link href="/servicios">
              <div className="px-2 md:px-4 py-1 border-dotted active border-r-2 border-black hover:text-[#46C2CA] transition-all duration-300">
                <div>Servicios</div>
              </div>
            </Link>
            <Link href="/contacto">
              <div className="px-2 md:px-4 py-1 hover:text-[#46C2CA] transition-all duration-300">
                <div>Contacto</div>
              </div>
            </Link>
          </div>
        </div>
        {!user && (
          <div className="flex items-center gap-2">
            <LoginButton />
          </div>
        )}
        {user && (
          <div className="relative">
            <div className="">
              {user.profileImgUrl && (
                <button
                  onClick={handleShowUserModal}
                  className="flex items-center"
                >
                  {showUserModal ? (
                    <MdOutlineArrowDropUp className="size-8 text-blue-900" />
                  ) : (
                    <MdOutlineArrowDropDown className="size-8 text-blue-900" />
                  )}
                  <Image
                    className="cursor-pointer border p-[1px] border-gray-500 rounded-full "
                    src={
                      user.profileImgUrl ||
                      "https://i.ibb.co/zZP4TJ3/Default-Profile-Img2.png"
                    }
                    width={40}
                    height={40}
                    alt=""
                  />
                </button>
              )}
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
                      <span className="py-1 border-b-2 border-[#46C2CA]">
                        {user.firstName}!
                      </span>
                    </h5>
                  </div>
                  <div
                    onClick={handleCloseModal}
                    className="py-2 hover:bg-[#eff3f6] hover:border-r-2 border-[#46C2CA] hover:text-[#46C2CA] transition-all duration-300"
                  >
                    <CustomButton name="Tu Perfil" href="/perfil" />
                  </div>
                  <button
                    onClick={handleShowLogoutModal}
                    className="hover:bg-[#eff3f6] hover:border-r-2 border-[#46C2CA] hover:text-[#46C2CA] transition-all duration-300"
                  >
                    <div className="flex items-center text-base lg:text-lg py-2 ">
                      <MdOutlineLogin className="font-bold" />
                      <div className="font-bold ml-1">Salir</div>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {logoutModal && <LogoutModal setLogoutModal={setLogoutModal} />}
    </div>
  );
};

export default NavBar;
