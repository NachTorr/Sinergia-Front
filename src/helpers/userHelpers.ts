import { UserData } from "@/types/UserData";

export const fetchUserData = async (
  userSub: string
): Promise<UserData | null> => {
  try {
    const response = await fetch(`http://localhost:8000/users/${userSub}`);
    if (response.status === 404) {
      return null;
    } else if (response.ok) {
      const userData: UserData = await response.json();
      return userData;
    } else {
      console.error(`Failed to fetch user data: ${response.statusText}`);
      return null;
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

export const fetchCurrentUser = async (): Promise<UserData | null> => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) return null;

  try {
    const response = await fetch("http://localhost:8000/users/user/me", {
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
