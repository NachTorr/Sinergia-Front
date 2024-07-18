import { MdOutlineLogin } from "react-icons/md";

function LoginButton() {
  return (
    <button className="">
      <a
        href="/api/auth/login"
        className="flex items-center font-semibold text-base lg:text-lg hover:text-blue-300 transition-all duration-300"
      >
        <MdOutlineLogin className="font-bold" />
        <div className="ml-1">Iniciar</div>
      </a>
    </button>
  );
}

export default LoginButton;
