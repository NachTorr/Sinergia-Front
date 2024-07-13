import { UserData } from "@/types/UserData";

const API_BASE_URL = "http://localhost:8000/auth";

export const fetchUserData = async (
  userSub: string
): Promise<UserData | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/${userSub}`);
    if (response.status === 404) {
      return null;
    } else if (response.ok) {
      const userData: UserData = await response.json();
      return userData;
    } else {
      console.error("Failed to fetch user data");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

export const signInUser = async (userData: UserData): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        sub: userData.sub,
      }),
    });

    if (response.ok) {
      const signInData = await response.json();
      localStorage.setItem("accessToken", signInData.accessToken);
      return true;
    } else {
      console.error("Failed to sign in user");
      return false;
    }
  } catch (error) {
    console.error("Error signing in user:", error);
    return false;
  }
};

export const fetchCurrentUser = async () => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) return null;

  try {
    const response = await fetch("http://localhost:8000/auth/user/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.ok) {
      return await response.json();
    } else {
      console.error("Failed to fetch current user");
      return null;
    }
  } catch (error) {
    console.error("Error fetching current user:", error);
    return null;
  }
};
