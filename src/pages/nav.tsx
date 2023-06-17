import logoNav from "/public/logoNav.png";

const Nav = () => {
  return (
    <div className="h-20 px-4 w-full flex  items-center justify-between bg-white shadow">
      <img src={logoNav} alt="logo" className="h-10 md:h-16 self-center" />
      <div className="flex">
        <h2 className="text-lg sm:text-3xl font-bold text-[#0A135C]">
          Danone Eco
        </h2>
        <h2 className="text-lg sm:text-3xl font-bold text-[#0A135C] ml-4">
          EcoHealth
        </h2>
      </div>
    </div>
  );
};

export default Nav;
