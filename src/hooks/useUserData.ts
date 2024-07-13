import { fetchCurrentUser } from "@/helpers/authHelpers";
import { UserData } from "@/types/UserData";
import { useEffect, useState } from "react";

const useUserData = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUserInfo = async () => {
      const user = await fetchCurrentUser();
      setUserData(user);
      setIsLoading(false);
    };

    getUserInfo();
  }, []);

  return { userData, isLoading };
};

export default useUserData;
