import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-15 px-24 py-14 bg-gray-200 justify-evenly text-gray-600">
      <div className="space-y-3 text-xs font-semibold text-gray-800">
        <h5 className="font-bold text-[15px]">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-3 text-xs font-semibold text-gray-800">
        <h5 className="font-bold text-[15px]">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>It's a pretty awesome clone</p>
        <p>Referals</p>
        <p>Raul Macavei</p>
      </div>
      <div className="space-y-3 text-xs font-semibold text-gray-800">
        <h5 className="font-bold text-[15px]">HOST</h5>
        <p>List your own place</p>
        <p>Find a place</p>
        <p>Search a trip</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-3 text-xs font-semibold text-gray-800">
        <h5 className="font-bold text-[15px]">SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>LinkedIn</p>
        <p>Github</p>
        <p>Thank you</p>
      </div>
    </div>
  );
};

export default Footer;
