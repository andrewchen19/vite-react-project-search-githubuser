import loginIMG from "../assets/images/login.svg";
import { useAuth0 } from "@auth0/auth0-react";
import { BsChatHeartFill } from "react-icons/bs";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <main className="bg-white min-h-screen grid place-items-center">
      <div className="w-[90vw] max-w-600[px] mx-auto text-center">
        <div className="max-w-[500px] mx-auto relative">
          <span className="absolute right-[120px] top-[80px] text-secondary text-4xl">
            <BsChatHeartFill />
          </span>
          <img src={loginIMG} alt="login image" className="w-full" />
        </div>
        <h1 className="text-secondary text-3xl lg:text-4xl lg:tracking-wide capitalize">
          gitHub user
        </h1>
        <button
          className="mt-8 btn btn-sm lg:btn-md btn-neutral"
          onClick={loginWithRedirect}
        >
          Log In / Sign Up
        </button>
      </div>
    </main>
  );
};

export default Login;
