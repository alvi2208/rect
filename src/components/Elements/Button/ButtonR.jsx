const ButtonR = (props) => {
  return (
    <button
      className={` ${props.variant} `}
      type="submit"
      onClick={props}
    ></button>
  );
};

export default ButtonR;
