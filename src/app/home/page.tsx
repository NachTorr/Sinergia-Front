"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import AboutUs from "@/components/AboutUs/AboutUs";
import MissionValuesCards from "@/components/MissionValuesCards/MissionValuesCards";
import { MissionValuesPreload } from "@/utils/MissionValuesPreload";
import { fetchUserData, signInUser } from "@/helpers/authHelpers";

const Home = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      if (!isLoading && user && user.sub) {
        const userData = await fetchUserData(user.sub);
        if (!userData) {
          router.push("/onboard");
        } else {
          await signInUser(userData);
        }
      }
    };

    checkUser();
  }, [user, isLoading, router]);

  if (isLoading) return <div>Loading...</div>;

  const missionValues = MissionValuesPreload;

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
        <div className="relative z-10 text-white text-center mt-[-7rem] p-4 rounded-xl px-10">
          <div>
            <h1 className="text-[5rem] font-bold mb-4">SOMOS SINERGIA</h1>
            <h3 className="text-[2rem]">
              Seguridad e Higiene y Medio Ambiente
            </h3>
          </div>
        </div>
      </div>
      <MissionValuesCards missionValues={missionValues} />
      <AboutUs />
    </div>
  );
};

export default Home;
