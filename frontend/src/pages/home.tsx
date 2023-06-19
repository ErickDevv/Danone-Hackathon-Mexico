import Nav from "./nav";
import yogurt from "/public/sara-cervera-4caIPcmVDII-unsplash.jpg";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="relative">
        <div
          className="relative h-80 w-screen flex items-center justify-center"
          style={{
            backgroundImage: `url('/public/vicky-ng-yIh0i6TYGrs-unsplash.jpg')`,
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
              naturaleza
            </h1>
            <h1
              className="text-xl md:text-3xl text-center font-bold text-white z-50"
              style={{ opacity: 1 }}
            >
              Descubre nuestra selección de productos saludables y ecológicos,
              cultivados con amor y respeto por tu bienestar y el planeta
            </h1>

            <button className="bg-[#0B78A5] z-50 text-white font-bold text-xl px-10 py-2 mt-10 rounded-lg">
              Descubre más
            </button>
          </div>
        </div>
      </div>

      {/**/}
      <h2 className="text-3xl lg:text-center mb-5 font-bold text-[#0A135C] ml-4 mt-10">
        Danone Eco
      </h2>
      <div className="lg:flex ">
        <div className="flex-col flex h-auto justify-center items-center">
          <h4 className="text-sm md:text-xl font-semibold text-end lg:text-start px-5 mb-5 text-[#2F3247]">
            Compromiso con la reducción del impacto ambiental en todas las
            etapas de producción, desde el cultivo hasta el envasado y
            distribución.
          </h4>

          <h4 className="hidden lg:block text-sm md:text-xl font-semibold text-end lg:text-start px-5 mb-5 text-[#2F3247]">
            Compromiso con la reducción del impacto ambiental en todas las
            etapas de producción, desde el cultivo hasta el envasado y
            distribución.
          </h4>
        </div>

        <div className="flex flex-col justify-center items-center w-screen ">
          <div className="flex flex-col  justify-center items-center">
            <img src={yogurt} alt="ecoDanone1" className="h-44" />
            <h2 className="text-2xl font-bold text-[#0A135C] mt-5">
              Yogurth Griego Yumi
            </h2>
            <h3 className="text-xl text-center font-bold text-[#2F3247] mt-5">
              ¡Descubre el deleite de este Yoguth Griego 100% ecológico!
            </h3>

            <button className="bg-[#0B78A5] text-white font-bold text-xl px-8 py-1 mt-5 rounded-lg">
              Ver más productos
            </button>
          </div>
        </div>
      </div>
      {/**/}
      <div className="flex flex-col justify-center items-center w-screen ">
        <h2 className="text-3xl mb-5 font-bold text-[#0A135C] ml-4 mt-10">
          Presentamos EcoHealth
        </h2>
        <h4 className="text-sm md:text-xl font-semibold text-end px-5 mb-5 text-[#2F3247]">
          EcoHealth se trata de nuestra aplicación para el seguimiento de tu
          salud la cual te permite realizar un seguimiento de tu consumo diario
          de calorias.
        </h4>
        <button className="bg-[#0B78A5] text-white font-bold text-xl px-8 py-1 mt-5 rounded-lg">
          Probar EcoHealth
        </button>
      </div>
      <div className="h-10 w-screen mt-5 bg-white flex items-center justify-center">
        <h2 className="text-white text-xl font-bold">Danone Eco</h2>
      </div>
    </>
  );
};

export default Home;
