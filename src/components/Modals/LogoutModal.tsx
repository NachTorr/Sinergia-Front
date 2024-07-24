import LogoutButton from "@/app/api/auth/LogoutButton";
import { useEffect, useState } from "react";

interface ILogoutModal {
  setLogoutModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogoutModal = ({ setLogoutModal }: ILogoutModal) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setLogoutModal(false);
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-80 overflow-y-auto h-full w-full flex justify-center items-center z-50 ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-all duration-300`}
    >
      <div
        className={`p-5 border w-96 relative bg-[#EFF3F6] shadow-lg rounded-3xl px-10`}
      >
        <div className="absolute inset-0 bg-[#46C2CA] z-[-1] shadow-lg -rotate-6 rounded-3xl"></div>
        <p className="px-5 pt-5 text-3xl font-bold text-center">
          Cerrar sesión
        </p>
        <p className="p-5 text-xl ">¿Estás seguro que deseas salir?</p>
        <div className="p-5 flex items-center justify-between">
          <LogoutButton />
          <button
            className="bg-blue-900 hover:bg-[#46C2CA] rounded-md px-4 py-2 text-white w-24"
            onClick={handleClose}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
