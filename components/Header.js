import Image from "next/image";
import { BiSearch, BiGlobe, BiMenu, BiUser } from "react-icons/bi";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          className="object-contain object-left"
          src="https://i.imgur.com/Nn8lhvj.png"
          fill
        />
      </div>

      {/* Middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start your search"
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
        />
        <BiSearch className="hidden md:inline-flex h-7 w-7 bg-red-400 text-white rounded-full p-[6px] cursor-pointer md:mx-2" />
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline-flex text-[16px] cursor-pointer">
          Become a host
        </p>
        <BiGlobe className="cursor-pointer text-[18px]" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <BiMenu className="cursor-pointer text-[18px]" />
          <BiUser className="cursor-pointer text-[18px]" />
        </div>
      </div>
    </header>
  );
}

export default Header;
