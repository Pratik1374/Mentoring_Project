import React, { useState } from "react";
import profileIcon from "../assets/profile_icon.jpg";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // let err = [];
      // setErrors(err);
      // if (!userEmail) {
      //   err["userEmailError"] = "Please enter email";
      // }
      // if (!userPassword) {
      //   err["userPasswordError"] = "Please enter password";
      // }
      // const noError = Object.keys(err).length === 0;

      // if (noError) {
      //   const payload = {
      //     userEmail: username,
      //     userPassword: password,
      //   };

      //   axios
      //     .post("http://localhost:8091/user/authenticate", payload)
      //     .then((response) => {
      //       localStorage.setItem("BearerToken", JSON.stringify(response.data));

      //       axios
      //         .get(
      //           "http://localhost:8091/user/login/" +
      //             username +
      //             "/" +
      //             password,
      //           {
      //             headers: {
      //               Authorization: "Bearer " + response.data,
      //             },
      //           }
      //         )
      //         .then((resp) => {
      //           toast.success("Login successful", { autoClose: 9000 });
      //           localStorage.setItem("UserData", JSON.stringify(resp.data));
      //           localStorage.setItem("isLoggedIn", "true");
      //           navigate(`${resp?.data?.role}`);
      //         })
      //         .catch((error) => {
      //           alert(error.response.data);
      //           toast.error("Failed to login");
      //         });
      //     })
      //     .catch((error) => {
      //       toast.error("Failed to login");
      //     });
      // }

      if (username === "user1" && password === "pass@123") {
        navigate("/operationalteam/dashboard");
      } else {
        alert("Invalid Credentials");
      }
    } catch (error) {
      alert("Something went wrong!!!");
    }
  };

  return (
    <div className="text-black min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg login_card_shadow w-[80vw] lg:w-[25vw] max-w-sm h-[60vh] md:h-[80vh]">
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
