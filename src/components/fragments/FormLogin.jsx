import React from "react";
import InputForm from "../Elements/Input/Input"; // Ensure the path is correct

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();

    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);

    window.location.href = "/Product"; // Navigate to /Product
  };

  return (
    <form
      onSubmit={handleLogin} // Attach handleLogin to form's onSubmit
      className="text-slate-500 dark:text-slate-400 mt-2 text-sm font-semibold"
    >
      <InputForm
        label="Email"
        type="email"
        name="email"
        placeholder="example@mail.com"
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="*****"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white font-bold w-full text-xl rounded-lg px-4 py-2 mt-4"
      >
        Login
      </button>
    </form>
  );
};

export default FormLogin;
