// import React from "react";
// import profileImg from "../assets/profile_icon.jpg";

// const Sidebar = () => {
//   return (
//     <div className="absolute top-0 w-full flex justify-between p-2 bg-gray-950">
//       <div className="h-[45px] rounded-full ml-2 flex flex-row justify-center items-center font-bold text-xl gap-2">
//         <div className="h-[45px] w-[45px] rounded-full overflow-hidden">
//           <img src={profileImg} alt="" className="object-contain" />
//         </div>
//         <h1>Username</h1>
//       </div>

//       <button className="py-2 px-5 bg-gray-700 rounded hover:bg-gray-800">Log Out</button>
//     </div>
//   );
// };

// export default Sidebar;

import { useEffect, useState } from "react";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineHome } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { RiTeamFill } from "react-icons/ri";
import { FaRegQuestionCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import profile_icon from "../../src/assets/profile_icon.jpg";
import axios from "axios";
import { useAuth } from "../context/auth.jsx";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  // const email = localStorage.getItem("email");
  const adminName = "Admin Name";

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };


  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className=" bg-black text-white shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed
         h-screen "
      >
        <div className="w-full overflow-hidden flex justify-center items-center flex-col p-2">
        <div className="flex w-[80px] h-[80px] overflow-hidden justify-center items-center rounded-full">
          <img src={profile_icon} alt="" className="object-contain h-[80px] w-[80px]" />
        </div>
        <h2 className="font-serif font-bold mt-2 text-xl">{adminName}</h2>
        </div>

        <div className="flex flex-col h-[65vh] overflow-auto scrollbar-thin scrollbar-thumb-gray-500 mt-2">
          <NavLink className="text-white no-underline flex flex-row items-center" to="/operationalteam/dashboard">
            <div className="max-h-10 h-10 overflow-hidden w-[40px]">
              <MdOutlineHome size={35} color="cyan"/>
            </div>
            <div className="flex rounded-md p-2 max-h-10 h-10 my-1 cursor-pointer lg:hover:bg-gray-600 font-bold w-full">
              Dashboard
            </div>
          </NavLink>
          <NavLink className="text-white no-underline flex flex-row items-center mt-2" to="/operationalteam/add-new-batch">
          <div className="max-h-10 h-10 overflow-hidden w-[40px]">
              <RiTeamFill size={31} color="cyan"/>
            </div>
            <div className="flex rounded-md p-2 max-h-10 h-10 my-1 cursor-pointer lg:hover:bg-gray-600 font-bold w-full">
              Add New Batch
            </div>
          </NavLink>
          <NavLink className="text-white no-underline flex flex-row items-center mt-2" to="/operationalteam/add-new-candidate">
          <div className="max-h-10 h-10 overflow-hidden w-[40px]">
              <CgProfile size={35} color="cyan"/>
            </div>
            <div className="flex rounded-md p-2 max-h-10 h-10 my-1 cursor-pointer lg:hover:bg-gray-600 font-bold w-full">
              Add Candidate
            </div>
          </NavLink>
          <NavLink className="text-white no-underline flex flex-row items-center mt-2" to="/operationalteam/employee-info">
          <div className="max-h-10 h-10 overflow-hidden w-[40px]">
              <ImProfile size={31} color="cyan"/>
            </div>
            <div className="flex rounded-md p-2 max-h-10 h-10 my-1 cursor-pointer lg:hover:bg-gray-600 font-bold w-full">
              Employee Information
            </div>
          </NavLink>
          <NavLink className="text-white no-underline flex flex-row items-center mt-2">
          <div className="max-h-10 h-10 overflow-hidden w-[40px]">
              <FaRegQuestionCircle size={32} color="cyan"/>
            </div>
            <div className="flex rounded-md p-2 max-h-10 h-10 my-1 cursor-pointer lg:hover:bg-gray-600 font-bold w-full">
              FAQ
            </div>
          </NavLink>
        </div>

        <div className="flex items-center mt-auto absolute bottom-0 left-0  overflow-hidden my-1 w-full justify-center">
          <NavLink className="bg-gray-800 w-[80%] p-2 cursor-pointer hover:bg-gray-700 text-center rounded-full" to="/login">Log Out</NavLink>
        </div>
      </motion.div>
      <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Navbar;
