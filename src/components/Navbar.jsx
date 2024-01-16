import React from "react";
import profileImg from "../assets/profile_icon.jpg";

const Navbar = () => {
  return (
    <div className="absolute top-0 w-full flex justify-between p-2 bg-gray-950">
      <div className="h-[45px] rounded-full ml-2 flex flex-row justify-center items-center font-bold text-xl gap-2">
        <div className="h-[45px] w-[45px] rounded-full overflow-hidden">
          <img src={profileImg} alt="" className="object-contain" />
        </div>
        <h1>Username</h1>
      </div>

      <button className="py-2 px-5 bg-gray-700 rounded hover:bg-gray-800">Log Out</button>
    </div>
  );
};

export default Navbar;
