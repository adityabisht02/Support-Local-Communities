import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../apis/apis";
import { ThemeContext } from "../../context/ThemeContext";
import { AuthContext } from "../../context/AuthContext";
import "../../components/Navbar.css";

function ArtworkForm() {
  const { theme } = useContext(ThemeContext);
  const user = useContext(AuthContext);
  const navbarCSS = theme === "dark" ? "navbar-dark" : "";
  const [formParams, updateFormParams] = useState({
    name: "",
    description: "",
    price: "",
  });
  const [fileID, setFileID] = useState(null);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!user.isLoggedIn) {
      navigate("/login");
      alert("Please login first!!");
    }

    //send all form params and file ID to apis to make db entry
    const dbresult = api.createArt(
      formParams.name,
      formParams.description,
      formParams.price,
      fileID
    );
    console.log("Art uploaded!!");
  }

  async function onChangeFile(e) {
    const file = e.target.files[0];
    console.log(file.name);
    const accountcurr = await api.getAccount();
    console.log(accountcurr);
    //generate a unique file id
    const fileId =
      new Date().getTime() + "-" + Math.random().toString(36).substring(7);
    setFileID(fileId);

    try {
      //use api function to upload to storage bucket
      const result = api.uploadImageToMarket(fileId, file);
      console.log("file uploaded successfully");
    } catch (error) {
      console.log("Some error uloading file to bucket", error);
    }
  }

  return (
    <React.Fragment>
      <div className={`navbar ${navbarCSS}`}>
        <div className="flex flex-col place-items-center mt-10" id="nftForm">
          <form
            className="bg-white shadow-md rounded px-8 pt-4 pb-8 mb-4 text-black"
            onSubmit={handleSubmit}
          >
            <h3 className="text-center font-bold mb-8">Submit your Artwork</h3>
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
                placeholder="Enter the name of the event"
                onChange={(e) =>
                  updateFormParams({ ...formParams, name: e.target.value })
                }
                value={formParams.name}
              ></input>
            </div>

            <div className="mb-6">
              <label
                className="block stroke-red-bg-btn  text-sm font-bold mb-2"
                htmlFor="description"
              >
                Art description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                cols="40"
                rows="5"
                id="description"
                type="text"
                placeholder="Describe the event"
                onChange={(e) =>
                  updateFormParams({
                    ...formParams,
                    description: e.target.value,
                  })
                }
                value={formParams.description}
              ></textarea>
            </div>
            <div className="mb-6">
              <label
                className="block stroke-red-bg-btn  text-sm font-bold mb-2"
                htmlFor="price"
              >
                Price
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Enter desired sell price"
                onChange={(e) =>
                  updateFormParams({ ...formParams, price: e.target.value })
                }
                value={formParams.price}
              ></input>
            </div>
            <div>
              <label
                className="block stroke-red-bg-btn  text-sm font-bold mb-2"
                htmlFor="image"
              >
                Upload
              </label>
              <input type={"file"} onChange={onChangeFile}></input>
            </div>
            <br></br>
            <div className="text-green text-center"></div>
            <button className="font-bold mt-10 w-full  bg-blue-900  text-white rounded p-2 shadow-lg">
              List Art
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ArtworkForm;
