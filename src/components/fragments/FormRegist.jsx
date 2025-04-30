import InputForm from "../Elements/Input/Input";

const FormRegist = () => {
  return (
    <form
      action=""
      className="text-slate-900  mt-2 text-sm font-bold"
      label="name"
      type="text"
      name="name"
    >
      <InputForm
        label="Fullname"
        type="fullname"
        name="fullname"
        placeholder="insert ur fullname"
      />

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
        placeholder="****"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        name="confirm password"
        placeholder="****"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white font-bold w-full text-xl rounded-lg px-4 py-2 mt-4"
      >
        Register
      </button>
    </form>
  );
};
export default FormRegist;
