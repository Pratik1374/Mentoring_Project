import React, { useState } from "react";
import profileIcon from "../assets/profile_icon.jpg";
import { useAuth } from "../context/auth";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/v1/auth/login`,
          { email, password }
        );
        if (res && res.data.success) {
          setAuth({
            ...auth,
            user: res.data.user,
            token: res.data.token,
          });
          localStorage.setItem("auth", JSON.stringify(res.data));
          navigate("/");
        } else {
          alert(res.data.message);
        }
      } catch (error) {
        alert("Something went wrong!!!");
      }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-[80vw] lg:w-[25vw] max-w-sm h-[60vh] md:h-[80vh]">
        <h1 className="text-2xl font-bold mb-6 text-center">Welcome</h1>
        <div className="flex justify-center items-center rounded-full overflow-hidden ">
          <img
            src={profileIcon}
            alt=""
            className="object-cover rounded-full"
            height={60}
            width={60}
          />
        </div>

        <form onSubmit={handleSubmit} className="mt-16">
          <div className="mb-6">
            <input
              id="username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className=" appearance-none border-gray-500 border-b-2  w-full py-2 px-1 text-gray-700 outline-none focus:outline-none "
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-8">
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className=" appearance-none border-gray-500 border-b-2  w-full py-2 px-1 text-gray-700 outline-none focus:outline-none "
              placeholder="Password"
              required
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="button_bg_gradient text-white px-4 py-2 font-medium w-full rounded-full"
            >
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
