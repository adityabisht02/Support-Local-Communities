import React from "react";
import NFTCard from "./NFTCard";
import img from "../painting.jpg";
function PaintingMarketplace() {
  const data = [
    {
      title: "Madhubani Art",
      description: "A madhubani painting of an elephant",
      img: img,
      price: "0.01 HBR",
    },
    {
      title: "Madhubani Art",
      description: "A madhubani painting of an elephant",
      img: img,
      price: "0.01 HBR",
    },
    {
      title: "Madhubani Art",
      description: "A madhubani painting of an elephant",
      img: img,
      price: "0.01 HBR",
    },
    {
      title: "Madhubani Art",
      description: "A madhubani painting of an elephant",
      img: img,
      price: "0.01 HBR",
    },
  ];
  return (
    <div className="grid grid-cols-3">
      {data.map((value, index) => {
        return <NFTCard data={value} key={index} />;
      })}
    </div>
  );
}

export default PaintingMarketplace;
