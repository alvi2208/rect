import FormRegist from "../components/fragments/FormRegist";
import ButtonR from "../components/Elements/Button/ButtonR";
import { Link } from "react-router-dom";

const Regist = () => {
  return (
    <div className="flex justify-center min-h-screen items-center border-spacing-4">
      <div className="max-w-xs w-full m-5 p-6 border border-blue-300 rounded-lg shadow-lg">
        <h1 className="font-bold text-blue-600 mb-2 text-3xl from-neutral-300 ">
          REGISTER
        </h1>
        <p className="font-medium mb-8">Welcome, please enter your account</p>
        <FormRegist />
        <ButtonR />
        <p className="text-sm mt-0.5 text-center">
          Have any account ?
          <Link to="/Login" className="text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Regist;
