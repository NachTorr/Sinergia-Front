import { MdOutlineLogin } from "react-icons/md";

function LoginButton() {
  return (
    <button className="">
      <a
        href="/api/auth/login"
        className="flex items-center font-semibold text-base lg:text-lg hover:text-blue-300 text-white md:text-black transition-all duration-300"
      >
        <MdOutlineLogin className="font-bold hidden md:block" />
        <div className="ml-1 text-sm md:text-xl bg-blue-900 p-2 md:bg-transparent md:p-0 rounded-lg">
          Iniciar
        </div>
      </a>
    </button>
  );
}

export default LoginButton;
