import logoNav from "/public/logoNav.png";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="h-20 pl-14 w-full flex  items-center justify-between bg-white shadow">
      <button onClick={() => navigate("/")}>
      <img src={logoNav} alt="logo" className="h-10  md:h-16 self-center" />

      </button>
      <div className="flex">
        <Link
          to="/ecodanone"
          className="text-lg sm:text-3xl pr-14 font-bold text-[#0A135C]"
        >
          🌱DanoneEco
        </Link>
        
      </div>
    </div>
  );
};

export default Nav;
