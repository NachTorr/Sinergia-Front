import { CiEdit } from "react-icons/ci";
import EditButton from "../CustomButton/EditButton";

interface UserInfoProps {
  firstName: string;
  lastName: string;
  email: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ firstName, lastName, email }) => {
  return (
    <div className="w-full mx-auto h-[14rem]">
      <div className="bg-white shadow-md rounded-lg px-6 pt-6">
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <div className="flex relative w-full">
              <div className="relative float-left w-[20%]">
                <h6 className="font-semibold">Nombre</h6>
              </div>
              <div className="relative float-right w-[80%] text-secondary">
                {firstName}
              </div>
            </div>
            <EditButton />
          </div>
          <hr className="my-4" />
        </div>
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <div className="flex relative w-full">
              <div className="relative float-left w-[20%]">
                <h6 className="font-semibold">Apellido</h6>
              </div>
              <div className="relative float-right w-[80%] text-secondary">
                {lastName}
              </div>
            </div>
            <EditButton />
          </div>
          <hr className="my-4" />
        </div>
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <div className="flex relative w-full">
              <div className="relative float-left w-[20%]">
                <h6 className="font-semibold">Email</h6>
              </div>
              <div className="relative float-right w-[80%] text-secondary">
                {email}
              </div>
            </div>
            <EditButton />
          </div>
          <hr className="mt-4" />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
