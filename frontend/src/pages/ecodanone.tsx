import Nav from "./nav";
import arrozConLeche from "/public/products/arrozConLeche.jpg";

const Product = ({ name, image, price, description }) => {
  if (!image) {
    image = arrozConLeche;
  }

  switch (image) {
    case "arrozConLeche":
      image = arrozConLeche;
      break;
  }

  return (
    <div className="max-w-sm mt-5 mx-2 rounded overflow-hidden shadow-lg flex flex-col justify-center items-center">
      <img className="lg:w-52 w-40" src={image} alt="Product Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #Category
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          #Another Category
        </span>
      </div>
    </div>
  );
};

const EcoDanone = () => {
  const Products = [
    {
      name: "Arroz con leche",
      image: "",
      price: "15$",
      description:
        "",
    },
    {
      name: "Arroz con leche",
      image: "",
      price: "15$",
      description:
        "",
    },
    {
      name: "Arroz con leche",
      image: "",
      price: "15$",
      description:
        "",
    },
    {
      name: "Arroz con leche",
      image: "",
      price: "15$",
      description:
        "",
    },
    {
      name: "Arroz con leche",
      image: "",
      price: "15$",
      description:
        "",
    },
  ];

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
        />
        <button className="py-2 px-4 ml-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Buscar
        </button>
      </div>

      <div className="flex justify-center items-center w-screen flex-wrap">
        {Products.map((product) => (
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
