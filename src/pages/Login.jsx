import FormLogin from "../components/fragments/FormLogin";
import Button from "../components/Elements/Button/Button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center min-h-screen items-center border-spacing-4">
      <div className="max-w-xs w-full m-5 p-6 border border-blue-300 rounded-lg shadow-lg">
        <h1 className="font-bold text-blue-600 mb-2 text-3xl from-neutral-300 ">
          LOGIN
        </h1>
        <p className="font-medium mb-8">Welcome, please enter your account</p>
        <FormLogin />
        <Button />
        <p className="text-sm mt-0.5 text-center">
          Don't have any account ?
          <Link to="/regist" className="text-blue-600">
            Regist
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
