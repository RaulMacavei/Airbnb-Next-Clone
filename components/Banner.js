import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[19rem] sm:h-[25rem] lg:h-[31rem] xl:h-[37,5rem] 2xl:h-[44rem]">
      <Image
        src="https://i.imgur.com/hct4RtG.jpg"
        alt="banner image"
        fill
        className="object-cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-white font-bold shadow-md text-md sm:text-xl">
          Not sure where to go? Perfect.
        </p>
        <button className="text-purple-500 bg-white px-8 py-3 shadow-md rounded-full font-bold my-2 hover:shadow-xl active:scale-95 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
