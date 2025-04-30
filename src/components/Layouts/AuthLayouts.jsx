import FormLogin from "../fragments/FormLogin";
import Button from "../Elements/Button/Button";
import { Link } from "react-router-dom";

const AuthLayouts = () => {
  return (
    <div className="flex justify-center min-h-screen items-center border-spacing-4">
      <div className="max-w-xs w-full m-5 p-6 border border-blue-300 rounded-lg shadow-lg">
        <h1 className="font-bold text-blue-600 mb-2 text-3xl from-neutral-300 ">
          LOGIN
        </h1>
        <p className="font-medium mb-8">Welcome, please enter your account</p>
        {/* <FormLogin />
        <Button /> */}

        <p className="text-sm mt-5 text-center dark:text-slate-500">
          {/* ...
          ...d
          ini lakukan conditional rendering */}
          {type} === "Login" ? "Dont have an acc ?" : "Already have an acc ?"
          {type} === "Login" &&
          {
            <Link to="/regist" className="text-blue-600">
              Register
            </Link>
          }
          {type} === "Regist" &&
          {
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          }
        </p>
      </div>
    </div>
  );
};

export default AuthLayouts;
