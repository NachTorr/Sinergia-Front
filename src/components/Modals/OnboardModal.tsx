"use client";
import { signupUser } from "@/helpers/authHelpers";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/validations/userSchema";

interface IOnBoardModal {
  setOnBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
}

type Inputs = {
  firstName: string;
  lastName: string;
};

const OnBoardModal = ({ setOnBoardModal }: IOnBoardModal) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(userSchema),
  });
  const { user } = useUser();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setOnBoardModal(false);
    }, 300);
  };

  const onSubmit = async (data: Inputs) => {
    setIsLoading(true);
    const success = await signupUser(
      data.firstName,
      data.lastName,
      user?.email ?? undefined,
      user?.sub ?? undefined,
      user?.picture ?? undefined
    );

    if (success) {
      window.location.href = "/";
      handleClose();
      setTimeout(() => {
        window.location.href = "/";
      }, 300);
    } else {
      console.error("Failed to complete profile");
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-80 overflow-y-auto h-full w-full flex justify-center items-center z-50 ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-all duration-300`}
    >
      <div
        className={`rounded-lg shadow-lg max-w-md ${
          isVisible ? "scale-100" : "scale-90"
        }`}
      >
        <div className="">
          <div className="relative py-3">
            <div className="absolute inset-0 bg-[#46C2CA] shadow-lg -rotate-6 rounded-3xl"></div>
            <div className="relative bg-[#EFF3F6] shadow-lg rounded-3xl px-10">
              <div className="">
                <div>
                  <div>
                    <h1 className="text-center text-2xl font-bold p-8">
                      Bienvenido a Sinergia!
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold mb-2">
                      Cuéntanos un poco sobre ti
                    </h1>
                  </div>
                  <div>
                    <h3 className="text-sm mb-6">
                      Necesitamos que completes tu perfil para personalizar tu
                      experiencia de incorporación.
                    </h3>
                  </div>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="text-base leading-6 space-y-4 sm:text-lg sm:leading-7">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="relative">
                        <input
                          autoComplete="off"
                          id="firstName"
                          type="text"
                          className={`peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#93C5FD] ${
                            errors.firstName ? "" : "mb-5"
                          }`}
                          placeholder="Nombre"
                          {...register("firstName")}
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-sm mb-5">
                            {errors.firstName.message}
                          </p>
                        )}
                        <label
                          htmlFor="firstName"
                          className="absolute left-0 -top-3.5 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          Nombre
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          autoComplete="off"
                          id="lastName"
                          type="text"
                          className={`peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#93C5FD] ${
                            errors.lastName ? "" : "mb-5"
                          }`}
                          placeholder="Apellido"
                          {...register("lastName")}
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-sm mb-5">
                            {errors.lastName.message}
                          </p>
                        )}
                        <label
                          htmlFor="lastName"
                          className="absolute left-0 -top-3.5 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          Apellido
                        </label>
                      </div>
                      <div className="relative flex justify-center py-6">
                        <button
                          type="submit"
                          className="bg-blue-900 hover:bg-black rounded-md px-2 py-1 text-white"
                        >
                          Completar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {isLoading && (
                  <div className="fixed inset-0 bg-gray-800 bg-opacity-80 flex justify-center items-center z-50">
                    <div className="loader">Cargando...</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnBoardModal;
