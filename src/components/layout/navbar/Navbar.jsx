
import { Link, NavLink } from "react-router-dom";
import { FaSun, FaMoon } from 'react-icons/fa';
import { navlist } from "../../../utils/Navlist";
import LoginLogoutBtn from "../../buttons/LoginLogoutBtn";


const Navbar = () => {


  return (
    <div className="nav">
      <nav
        id="navigationbar"
        className={` bg-white dark:bg-gray-900 text-black dark:text-white py-2 px-5 flex justify-between items-center shadow-lg  border-b-2 border-gray-200 dark:border-gray-700 relative z-10
        `}
      >
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-white dark:bg-gray-800 rounded-full flex justify-center items-center">
              <span className="text-blue-600 text-xl font-bold bg-gradient-to-r from-blue-500 via-red-500 to-sky-500 text-transparent bg-clip-text">
                🧠
              </span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-red-500 to-sky-500 text-transparent bg-clip-text">
              PrepNGo
            </span>
          </Link>
        </div>

        {/* Nav Links */}
        <div className="flex space-x-8 ">
          {
            navlist.map((list,index)=>{
                return(
                    <NavLink to={list.path} key={index+1} className={({ isActive }) =>
                  isActive
                    ? "text-sm underline font-semibold text-blue-500 "
                    : "text-sm font-semibold text-black dark:text-white hover:text-blue-500"
                }>
                        {list.label}
                    </NavLink>
                )
            })
          }
        </div>

        {/* Auth + Theme Toggle Buttons */}
        <div className="flex items-center space-x-4">
         
          {/* Login / Logout */}
          {/* <button
            className="bg-orange-400 text-white px-4 py-[5px] rounded hover:bg-orange-500 transition"
          >
           <Link to="/login"> Login</Link>
          </button> */}
          <LoginLogoutBtn/>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
