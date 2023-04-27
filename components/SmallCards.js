import React from "react";
import Image from "next/image";

const SmallCard = ({ img, location }) => {
  return (
    <div className="flex items-center m-1 mt-4 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-200 ease-out">
      <div className="relative h-16 w-16">
        <Image src={img} fill className="rounded-lg" objectFit="cover" />
      </div>
      <div className="font-semibold">
        <h2>{location}</h2>
      </div>
    </div>
  );
};

export default SmallCard;
