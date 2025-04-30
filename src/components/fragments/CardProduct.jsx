const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-gray-900 border shadow mx-2 bg-center border-gray-800 rounded-lg">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <div className="text-xl px-5 pb-5 flex">
      <img src={image} alt="product" className="w-full rounded-t-lg flex" />
    </div>
  );
};

const Body = ({ name, description }) => {
  return (
    <div className="text-xl px-5 pb-5">
      <h5 className="font-semibold text-white">{name}</h5>
      <p className="text-5 text-white">{description}</p>
    </div>
  );
};

const Footer = ({ price, onAddToCart }) => {
  return (
    <div className="w-full items-center px-5 pb-5">
      <span className="text-xl text-white font-bold">{price}</span>
      <p></p>
      <button
        className="bg-blue-600 font-bold text-xl rounded-lg px-4 py-2"
        onClick={onAddToCart}
      >
        Add to cart
      </button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
