import React from "react";

function NFTCard(props) {
  return (
    <div className="border-2 ml-12 mt-5 mb-12 flex flex-col items-center text-center rounded-lg w-48 md:w-72 shadow-2xl bg-black">
      <img
        src={props.data.img}
        alt=""
        className="w-100 h-80 rounded-lg object-cover"
        crossOrigin="anonymous"
      />
      <div className="text-white w-full p-2 bg-gradient-to-t from-[#454545] to-transparent rounded-lg pt-5 -mt-20">
        <strong className="text-xl">{props.data.title}</strong>
        <p className="display-inline">{props.data.description}</p>
        <p className="display-inline">{props.data.price}</p>
        <button className="font-bold p-3 bg-slate-700 w-full">Purchase</button>
      </div>
    </div>
  );
}

export default NFTCard;
