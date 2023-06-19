import Nav from "./nav";
import arrozconleche from "/public/arrozconleche.jpg";
import flan from "/public/flan.jpg";
import cuajada from "/public/cuajada.jpg";
import griego from "/public/griego.jpg";

import { useQuery } from "react-query";
import { useState } from "react";

import useEcohealth from "../store/ecohealth";

interface Product {
  name: string;
  image: string;
  price: number;
  description: string;
}

const Product = ({ name, image, price, description }: Product) => {
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
    <div className="max-w-sm  mt-5 mx-2 rounded overflow-hidden shadow-lg flex flex-col justify-center items-center">
      <img className="lg:w-52 h-56 w-40" src={image} alt="Product Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <p className="text-gray-700 text- text-end">Precio: ${price}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #Category
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          #Another Category
        </span>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mb-10">
        Agregar al carrito
      </button>
    </div>
  );
};

const EcoDanone = () => {
  const [products, setProducts] = useState([]);
  const [productsCopy, setProductsCopy] = useState([]);

  //@ts-ignore
  const { searchQuery } = useEcohealth();

  const handleSearch = (e: any) => {
    const filteredProducts = searchQuery(products, e.target.value);

    setProductsCopy(filteredProducts);
  };

  const fetchProducts = async () => {
    const response = await fetch(
      import.meta.env.VITE_API_URL + "api/getProducts"
    );
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
      <div className="bg-[#85b4ff] p-5 text-center text-white font-bold text-sm md:text-xl">
        DanoneEco, comprometidos con tu salud y la del planeta. No olvides que
        puedes utilizar nuestro filtro apartir de calorias EcoHealth para
        encontrar los productos que mejor se adapten a tus necesidades.
      </div>

      <div className="flex items-center justify-center border-gray-300 rounded-md mt-10">
        <input
          type="text"
          className="w-1/2 py-2 px-4 rounded-md focus:outline-none border focus:ring-2 focus:ring-blue-500"
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
          />
        ))}
      </div>
    </>
  );
};

export default EcoDanone;
