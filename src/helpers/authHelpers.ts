import { UserData } from "@/types/UserData";

export const signInUser = async (userData: UserData): Promise<boolean> => {
  try {
    const response = await fetch(`http://localhost:8000/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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

export const signupUser = async (
  firstName: string,
  lastName: string,
  email: string | undefined,
  sub: string | undefined,
  profileImgUrl: string | undefined
) => {
  const response = await fetch("http://localhost:8000/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      sub,
      profileImgUrl,
    }),
  });

  return response.ok;
};
