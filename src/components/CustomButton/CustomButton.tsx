import { ButtonProps } from "@/types/ButtonProps";
import Link from "next/link";
import { MdOutlineSpaceDashboard } from "react-icons/md";

const CustomButton: React.FC<ButtonProps> = ({ onClick, name, href }) => {
  return (
    <Link href={href}>
      <button
        onClick={onClick}
        className="flex items-center text-base lg:text-lg font-bold"
      >
        <MdOutlineSpaceDashboard className="font-bold" />
        <div className="ml-1">{name}</div>
      </button>
    </Link>
  );
};

export default CustomButton;
