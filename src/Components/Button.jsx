/* eslint-disable react/prop-types */
// import React from "react";

const Button = ({ data }) => {
  //   console.log(props);
  // console.log({data});
  

  return (
    <div className="m-2 ">
      <button className="cursor-pointer text-[14px] bg-gray-100 border py-1 px-3 font-bold rounded-lg outline-0 border-0">
        {data}
      </button>
    </div>
  );
};

export default Button;
