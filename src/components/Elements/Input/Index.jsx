import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
  const [label, type, name] = props("");
  return (
    <div>
      <Label htmlFor={label} />
      <Input name={name} type={type} />
    </div>
  );
};

export default Index;
