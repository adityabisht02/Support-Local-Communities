import { React, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../apis/apis";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import './Navbar.css';
import Eagle from '../assets/eagle.gif';

function Login() {
  const { theme } = useContext(ThemeContext);
  const navbarCSS = theme === "dark" ? "navbar-dark" : "";
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const user = useContext(AuthContext);
  const [formParams, updateFormParams] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (isUserLoggedIn) {
      user.isLoggedIn = true;
      console.log(user.isLoggedIn);
      navigate("/");
    }
    const body = document.body;
    if (theme == 'dark') {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [isUserLoggedIn, theme]);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const result = await api.createSession(
        formParams.email,
        formParams.password
      );
      // const result = await api.getAccount();
      if (result) {
        localStorage.setItem("loginStatus", true);
        setUserLoggedIn(result);
      }
    } catch (e) {
      alert("Login failed");
      console.log(e);
    }
  }

  return (
    <div className={`navbar ${navbarCSS}`}>
      <div className="flex flex-col place-items-center mt-10" id="nftForm">
        <form
          className="bg-white shadow-md rounded px-8 pt-4 pb-8 mb-4 text-black w-[400px] "
          onSubmit={handleSubmit}
        >
          <h3 className="text-center font-bold mb-8 text-lg">Login</h3>
          <div className="flex items-center justify-center mb-6">
            <img src={Eagle} alt="Eagle" className="w-40 h-40" />
          </div>
          <div className="mb-6">
            <label
              className="block stroke-red-bg-btn  text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              cols="40"
              rows="5"
              id="email"
              type="email"
              placeholder="Enter your email"
              onChange={(e) =>
                updateFormParams({
                  ...formParams,
                  email: e.target.value,
                })
              }
              value={formParams.email}
            />
          </div>
          <div className="mb-4">
            <label
              className="block stroke-red-bg-btn  text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              onChange={(e) =>
                updateFormParams({ ...formParams, password: e.target.value })
              }
              value={formParams.password}
            ></input>
          </div>
          <br></br>
          <div className="text-green text-center"></div>
          <button className="font-bold mt-10 w-full  bg-blue-900  text-white rounded p-2 shadow-lg">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
