// class Button extends React.Component {
//   render() {
//     return (
//       <button className="items-center justify-center" type="submit">
//         klik
//       </button>
//     );
//   }
// }

const Button = (props) => {
  return (
    <button
      className={`  ${props.variant} custom-button`}
      type="submit"
      onClick={props}
    ></button>
  );
};

// const ButtonBlue = () => {
//   return (
//     <button className="bg-blue-800" type="submit">
//       klik
//     </button>
//   );
// };

// function ButtonBlack() {
//   return <button type="submit">klik</button>;
// }

export default Button;
