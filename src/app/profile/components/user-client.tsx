"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

const ProfileClient = () => {
  const { user, error, isLoading } = useUser();

  console.log(user);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return user ? (
    <div>
      {user.picture ? (
        <Image
          src={user.picture}
          alt={user.name || "User Picture"}
          width={100}
          height={100}
        />
      ) : (
        <div>No Profile Picture</div>
      )}
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  ) : (
    <div>No user logged in</div>
  );
};

export default ProfileClient;
