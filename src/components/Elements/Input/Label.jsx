const Label = (props) => {
  const { htmlFor, text } = props;
  return (
    <label
      htmlFor={htmlFor}
      className="block mb-1 dark:text-black opacity-40 font-bold"
    >
      {text}
    </label>
  );
};

export default Label;
