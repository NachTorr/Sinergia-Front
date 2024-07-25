import axiosInstance from "./axiosInstance";
import { UserData } from "@/types/UserData";

export class TokenExpiredError extends Error {
  constructor() {
    super("Token has expired");
    this.name = "TokenExpiredError";
  }
}

export const fetchUserData = async (
  userSub: string
): Promise<UserData | null> => {
  try {
    const response = await axiosInstance.get(`/users/${userSub}`);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      throw new TokenExpiredError();
    } else if (error.response && error.response.status === 404) {
      return null;
    } else {
      console.error(`Failed to fetch user data: ${error.response.statusText}`);
      return null;
    }
  }
};

export const fetchCurrentUser = async (): Promise<UserData | null> => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) return null;
  try {
    const response = await axiosInstance.get("/users/user/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      throw new TokenExpiredError();
    }
    console.error("Error fetching current user:", error);
    return null;
  }
};

export const getAllUsers = async (): Promise<UserData[] | null> => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) return null;
  try {
    const response = await axiosInstance.get("/users", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      throw new TokenExpiredError();
    }
    console.error("Error fetching users:", error);
    return null;
  }
};
