import { React, useState } from "react";
import { Client, ID, Account } from "appwrite";
import { Server } from "./utils/config";
import api from "./apis/apis";
function Register() {
  const [formParams, updateFormParams] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const promise = api.createAccount(
      ID.unique(),
      formParams.email,
      formParams.password,
      formParams.name
    );

    promise.then(
      function (response) {
        console.log(response); // Success
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  }

  return (
    <div className="">
      <div className="flex flex-col place-items-center mt-10" id="nftForm">
        <form
          className="bg-white shadow-md rounded px-8 pt-4 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <h3 className="text-center font-bold mb-8">Register</h3>
          <div className="mb-4">
            <label
              className="block stroke-red-bg-btn  text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              onChange={(e) =>
                updateFormParams({ ...formParams, name: e.target.value })
              }
              value={formParams.name}
            ></input>
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
