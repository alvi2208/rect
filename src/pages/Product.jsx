import React, { useState } from "react";
import CardProduct from "../components/fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Gibran Shoes",
    price: "RP 100.000",
    image: "/images/s1.avif",
    description: "new shoes adkjadads qidhquidquidq idqadas dgagidga",
  },
  {
    id: 2,
    name: "Wowo Shoes",
    price: "RP 200.000",
    image: "/images/s2.jpg",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit facere ",
  },
  {
    id: 3,
    name: "Gibran Shoes",
    price: "RP 100.000",
    image: "/images/s1.avif",
    description: "new shoes adkjadads qidhquidquidq idqadas dgagidga",
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                qty: item.qty + 1,
                total:
                  (item.qty + 1) *
                  parseInt(item.price.replace("RP ", "").replace(".", "")),
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          qty: 1,
          total: parseInt(product.price.replace("RP ", "").replace(".", "")),
        },
      ]);
    }
  };

  return (
    <>
      <div className="flex justify-end h-10 bg-blue-800 text-white font-bold items-center p-4">
        {email}
        <button
          className="ml-4 font-bold text-black  bg-red-500 p-2 rounded"
          onClick={() => {
            localStorage.removeItem("email");
            localStorage.removeItem("password");
            window.location.href = "/login"; // Navigate to the login page or any other page on logout
          }}
        >
          Logout
        </button>
      </div>
      <div className="flex py-5 justify-center">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body
              name={product.name}
              description={product.description}
            />
            <CardProduct.Footer
              price={product.price}
              onAddToCart={() => addToCart(product)}
            />
          </CardProduct>
        ))}
      </div>

      <div className="w-1/4">
        <h1 className="text-3xl text-blue-600 font-semibold">Cart</h1>
        {cart.length > 0 ? (
          cart.map((item) => (
            <div
              key={item.id}
              className="text-white bg-gray-800 p-4 rounded-lg mb-2"
            >
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.qty}</p>
              <p>Total: RP {item.total.toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p className="text-white">Cart is empty</p>
        )}
      </div>
    </>
  );
};

export default ProductPage;
