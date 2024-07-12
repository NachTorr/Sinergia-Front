"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { FormEvent, useState } from "react";

const PostLogin = () => {
  const { user } = useUser();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email: user?.email,
        sub: user?.sub,
      }),
    });

    if (response.ok) {
      window.location.href = "/home";
    } else {
      console.error("Failed to complete profile");
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="rounded-lg shadow-lg max-w-md">
        <div className="">
          <div className="relative py-3">
            <div className="absolute inset-0 bg-[#93C5FD] shadow-lg -rotate-6 rounded-3xl"></div>
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
                  <div className=" text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <form onSubmit={handleSubmit}>
                      <div className="relative">
                        <input
                          autoComplete="off"
                          id="firstName"
                          name="firstName"
                          type="text"
                          className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-[#93C5FD] mb-5"
                          placeholder="Nombre"
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                        <label
                          htmlFor="firstName"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          Nombre
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          autoComplete="off"
                          id="lastName"
                          name="lastName"
                          type="text"
                          className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-[#93C5FD]  mb-5"
                          placeholder="Apellido"
                          onChange={(e) => setLastName(e.target.value)}
                        />
                        <label
                          htmlFor="lastName"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          Apellido
                        </label>
                      </div>
                      <div className="relative flex justify-center py-6">
                        <button
                          type="submit"
                          className="bg-[#93C5FD] rounded-md px-2 py-1"
                        >
                          Completar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostLogin;
