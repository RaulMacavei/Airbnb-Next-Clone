import Image from "next/image";
import { useState } from "react";
import { BiSearch, BiGlobe, BiMenu, BiUser } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numOfGuests, setNumOfGuests] = useState(1);

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
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

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>

            <HiUsers className="h-5" />
            <input
              value={numOfGuests}
              onChange={(e) => setNumOfGuests(e.target.value)}
              min={1}
              max={8}
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex justify-around items-center">
            <buttons
              onClick={resetInput}
              className="text-gray-500 cursor-pointer"
            >
              Cancel
            </buttons>
            <buttons className="text-red-400 cursor-pointer">Submit</buttons>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
