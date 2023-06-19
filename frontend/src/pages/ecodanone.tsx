import Nav from "../components/nav";
import arrozconleche from "../../public/arrozconleche.jpg";
import flan from "../../public/flan.jpg";
import cuajada from "../../public/cuajada.jpg";
import griego from "../../public/griego.jpg";
import { PhShoppingCartFill } from "../components/phShopping";

import { useQuery } from "react-query";
import { useState } from "react";

import useEcohealth from "../store/ecohealth";
import { shallow } from "zustand/shallow";

interface Product {
  name: string;
  image: string;
  price: number;
  description: string;
  categories: string[];
}

const Product = ({ name, image, price, description, categories }: Product) => {
  //@ts-ignore
  const { addToCart } = useEcohealth();

  if (!image) {
    image = arrozconleche;
  }

  switch (image) {
    case "arrozconleche":
      image = arrozconleche;
      break;
    case "flan":
      image = flan;
      break;
    case "cuajada":
      image = cuajada;
      break;
    case "yogurtgriego":
      image = griego;
      break;
  }

  return (
    <div className="max-w-sm h-[550px]  mt-5 mx-2 rounded overflow-hidden flex flex-col justify-center items-center border-2 border-gray-300 shadow-lg">
      <img className="lg:w-52 h-56 w-40" src={image} alt="Product Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <p className="text-gray-700 text- text-end">Precio: ${price}</p>
      </div>
      <div className="px-6 py-4">
        {categories.map((category) => (
          <span
            key={category}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            {category}
          </span>
        ))}
      </div>
      <button
        onClick={() => addToCart(name)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mb-10"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

const EcoDanone = () => {
  const [products, setProducts] = useState([]);
  const [productsCopy, setProductsCopy] = useState([]);
  const [description, setDescription] = useState(true);

  //@ts-ignore
  const { searchQuery } = useEcohealth();

  const { shoppingCart, setIsCartOpen, isCartOpen } = useEcohealth(
    (state) => ({
      //@ts-ignore
      shoppingCart: state.shoppingCart,
      //@ts-ignore
      addToCart: state.addToCart,
      //@ts-ignore
      isCartOpen: state.isCartOpen,
      //@ts-ignore
      setIsCartOpen: state.setIsCartOpen,
    }),
    shallow
  );

  console.log(shoppingCart.length);

  const handleSearch = (e: any) => {
    const filteredProducts = searchQuery(products, e.target.value);

    setProductsCopy(filteredProducts);
  };

  const fetchProducts = async () => {
    let url = "http://localhost:3000/api/getProducts";

    if (import.meta.env.VITE_API_URL) {
      {
        url = import.meta.env.VITE_API_URL + "api/getProducts";
      }
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const res = await response.json();

    setProducts(res);
    setProductsCopy(res);
    return res;
  };

  const { isLoading, error } = useQuery("products", fetchProducts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    //@ts-ignore
    return <div>Error {error.message}</div>;
  }

  return (
    <>
      <Nav />
      {isCartOpen == true ? (
        <div
          className="h-[calc(100%-5rem)] w-full z-50 absolute flex justify-center items-center"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
        >
          <div className="flex flex-col w-1/2  lg:w-1/3 z-50 h-[600px] border-2 border-gray-300">
            <div className="bg-white w-full h-full overflow-y-scroll">
              <div className="flex m-2 h-10 bg-white border-gray-300 justify-end items-center">
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-2xl md:text-3xl font-bold text-center z-50 "
                >
                  ❌
                </button>
              </div>
              {shoppingCart.length > 0 && (
                <div>
                  {shoppingCart.map((product: any) => (
                    <div className=" w-full h-20 bg-gray-100 flex justify-center flex-col items-center border-b-2 border-gray-300">
                      {" "}
                      <div className="flex justify-evenly items-between w-full">
                        <p className="text-2xl md:text-3xl font-bold text-center z-50">
                          📌
                        </p>
                        <h3 className="text-3xl md:text-4xl font-bold text-center z-50 text-blue-900">
                          {product}
                        </h3>
                        <div></div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}

      {description && (
        <div className="bg-[#85b4ff] p-5 px-12 text-center text-white font-bold text-sm md:text-xl relative">
          <button
            onClick={() => setDescription(false)}
            className="absolute top-5 right-5 transform translate-x-1/2 -translate-y-1/2 z-50"
          >
            ❌
          </button>
          DanoneEco, comprometidos con tu salud y la del planeta. No olvides que
          puedes utilizar nuestro filtro a partir de calorías EcoHealth para
          encontrar los productos que mejor se adapten a tus necesidades.
        </div>
      )}

      <div className="flex items-center justify-center border-gray-300 rounded-md mt-5">
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={() => {
              console.log("click");
              console.log(isCartOpen);
              setIsCartOpen(!isCartOpen);
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <PhShoppingCartFill className="w-9 h-9" />
          </button>
        </div>
        <input
          type="text"
          className="w-1/2 py-2 px-4 rounded-md focus:outline-none border-2 focus:ring-2 focus:ring-blue-500"
          placeholder="Buscar..."
          onChange={handleSearch}
        />
        <button className="py-2 px-4 ml-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Buscar
        </button>
      </div>

      <div className="flex justify-center items-center w-screen flex-wrap">
        {productsCopy.map((product: any) => (
          <Product
            name={product.name}
            image={product.image}
            price={product.price}
            description={product.description}
            categories={product.categories}
          />
        ))}
      </div>
    </>
  );
};

export default EcoDanone;
