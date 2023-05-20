import { React, useState } from "react";

function CreateArtwork() {
  return (
    <div className="">
      <div className="flex flex-col place-items-center mt-10" id="nftForm">
        <form
          className="bg-white shadow-md rounded px-8 pt-4 pb-8 mb-4"
          onSubmit={onCreateEvent}
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
              placeholder="Min 0.01 ETH"
              step="0.01"
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
          <button className="font-bold mt-10 w-full bg-red-bg-btn hover:bg-red-500  text-white rounded p-2 shadow-lg">
            List Art
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateArtwork;
