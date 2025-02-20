import React from "react";

const Header = () => {
  return (
    <div
      id="header"
      className="w-10/12 m-auto mt-12 flex justify-between items-end"
    >
      <div className="md:text-6xl md:to-50% text-4xl bg-gradient-to-r from-blue-700 from-10% to-purple-700 to-30% w-60 text-transparent bg-clip-text">
        Reevan
      </div>
      <div className="md:flex text-2xl  w-48 h-14 text-white hidden items-center justify-center rounded-lg tracking-widest bg-gradient-to-r from-blue-700 to-purple-700">
        Contact Us
      </div>
    </div>
  );
};

export default Header;
