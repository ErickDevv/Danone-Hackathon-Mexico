import { Link, useNavigate } from "react-router-dom";
import Nav from "../components/nav";
import yogurt from "../..//public/yogurtnatural.jpg";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Nav />
      <div className="relative">
        <div
          className="relative h-80 w-screen flex items-center justify-center"
          style={{
            backgroundImage: `url('vicky-ng-yIh0i6TYGrs-unsplash.jpg')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="bg-[#0A135C] h-full w-screen absolute opacity-60" />
          <div className="h-80 w-screen flex items-center justify-center flex-col lg:p-28">
            <h1
              className="text-2xl md:text-4xl text-center font-bold text-white z-50 mb-5 "
              style={{ opacity: 1 }}
            >
              Sabor auténtico para una vida saludable y en armonía con la
              naturaleza.
            </h1>
            <h1
              className="text-xl md:text-3xl text-center font-bold text-white z-50"
              style={{ opacity: 1 }}
            >
              Descubre nuestra selección de productos saludables y ecológicos,
              cultivados con amor y respeto por tu bienestar y el del planeta.
            </h1>

            <button
            onClick={() => navigate("/ecodanone")}
            className="bg-[#229cd0] z-50 text-white font-bold text-xl px-10 py-2 mt-10 rounded-lg">
              🔎 Descubre más
            </button>
          </div>
        </div>
      </div>

      {/**/}
      <h2 className="text-4xl lg:text-center mb-5 font-bold text-[#0A135C] ml-4 mt-10">
        DanoneEco
      </h2>
      <div className="lg:flex ">
        <div className="flex-col flex h-auto justify-center items-center">
          <h4 className="text-sm md:text-xl font-semibold text-end lg:text-center lg:text-2xl px-5 mb-5 text-[#2F3247]">
            🌱 Compromiso con la reducción del impacto ambiental en todas las
            etapas de producción, desde el cultivo hasta el envasado y
            distribución.
          </h4>

          <h4 className="hidden lg:block text-sm md:text-xl font-semibold lg:text-center lg:text-2xl text-end px-5 mb-5 text-[#2F3247]">
            ❤️‍🩹Utilizamos ingredientes de origen natural para garantizar que tu
            salud y la del planeta estén en armonía.
          </h4>
        </div>

        <div className="flex flex-col justify-center items-center w-screen ">
          <div className="max-w-sm  mt-5 mx-2 rounded overflow-hidden flex flex-col justify-center items-center border-2 ">
            <img
              className="lg:w-52 w-40 pt-5"
              src={yogurt}
              alt="Product Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Yogurt Natural</div>
              <p className="text-gray-700 text-base px-1">
                Elaborado con ingredientes mínimos y sin aditivos innecesarios,
                nuestro yogurt natural te ofrece la esencia misma de la frescura
                láctea.{" "}
              </p>
              <p className="text-gray-700 text- text-end">Precio: $8</p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #fresco
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                #yogurt
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                #natural
              </span>
            </div>
          </div>
          <button  onClick={() => navigate("/ecodanone")} className="mt-5 text-lg sm:text-3xl font-bold text-[#0A135C] ml-4 border-2 border-[#0A135C] rounded-lg px-5 py-1">
            👀 Ver más
          </button>
        </div>
      </div>
      {/**/}
      <div className="flex flex-col justify-center items-center w-screen ">
        <h2 className="text-3xl mb-5 font-bold text-[#0A135C] ml-4 mt-10">
          Presentamos EcoHealth
        </h2>
        <h4 className="text-sm md:text-xl font-semibold text-end px-5 mb-5 text-[#2F3247]">
          📱Nuestra aplicación de seguimiento de consumo diario de calorias en
          base a tus productos EcoDanone.
        </h4>
        <Link
          to="/ecodanone"
          className="text-lg sm:text-3xl font-bold text-[#0A135C] ml-4 border-2 border-[#0A135C] rounded-lg px-5 py-1"
        >
          ❤️‍🩹Probar
        </Link>
      </div>
      <div className="h-10 w-screen mt-5 bg-white flex items-center justify-center">
        <h2 className="text-white text-xl font-bold">DanoneEco</h2>
      </div>
    </>
  );
};

export default Home;
