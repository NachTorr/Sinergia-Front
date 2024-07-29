import axiosInstance from "./axiosInstance";
import { UserData } from "@/types/UserData";

export const signInUser = async (userData: UserData): Promise<boolean> => {
  try {
    const response = await axiosInstance.post("/auth/signin", {
      email: userData.email,
      sub: userData.sub,
    });

    localStorage.setItem("accessToken", response.data.accessToken);
    return true;
  } catch (error) {
    console.error("Error signing in user:", error);
    return false;
  }
};

export const signupUser = async (
  firstName: string,
  lastName: string,
  email: string | undefined,
  sub: string | undefined,
  profileImgUrl: string | undefined
): Promise<boolean> => {
  try {
    const response = await axiosInstance.post("/auth/signup", {
      firstName,
      lastName,
      email,
      sub,
      profileImgUrl,
    });

    return response.status === 201;
  } catch (error) {
    console.error("Error signing up user:", error);
    return false;
  }
};
