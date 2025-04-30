import Label from "./Label";

const Input = (props) => {
  const { type, placeholder, name, label } = props;
  return (
    <div className="mb-4 block   text-sm font-medium   dark:text-blue-900">
      <Label htmlFor={name} text={label} />
      <input
        type={type}
        className="text-sm border rounded-none w-full opacity-40"
        placeholder={placeholder}
        name={name}
        id={name}
      />
    </div>
  );
};

export default Input;
