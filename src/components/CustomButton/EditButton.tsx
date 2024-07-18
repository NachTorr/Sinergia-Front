import { CiEdit } from "react-icons/ci";

const EditButton: React.FC = () => {
  return (
    <div className="relative group">
      <button className="flex items-center justify-center p-1 bg-gray-200 rounded-full hover:bg-gray-300">
        <CiEdit className="text-2xl" />
      </button>
      <div className="absolute top-[-28px] right-0 transform hidden group-hover:flex items-center">
        <span className="relative z-10 p-2 text-xs leading-none whitespace-no-wrap shadow-lg rounded-md">
          Editar
        </span>
      </div>
    </div>
  );
};

export default EditButton;
