import LogoutButton from "@/app/api/auth/LogoutButton";

interface IExpirationModal {
  setExpirationModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExpirationModal = () => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-80 overflow-y-auto h-full w-full flex justify-center items-center z-50">
      <div className="p-5 border w-96 relative bg-[#EFF3F6] shadow-lg rounded-3xl px-10">
        <div className="absolute inset-0 bg-[#46C2CA] z-[-1] shadow-lg -rotate-6 rounded-3xl"></div>
        <div className="text-center">
          <p className="px-5 pt-5 text-3xl font-bold">Tu sesión ha expirado</p>
          <p className="p-5 text-xl ">Por favor vuelve a conectarte</p>
        </div>
        <div className="p-5 flex items-center justify-center">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default ExpirationModal;
