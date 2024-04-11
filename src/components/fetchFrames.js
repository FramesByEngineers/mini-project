import React, { useEffect, useState } from "react";
import NotFound from "@/assets/img/nonfound.svg";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearCart } from "@/redux/slices/cartSlice";
import { getAllFrames } from "@/firebase/functions";
import { setFrames } from "@/redux/slices/frameSlice";
import Link from "next/link";

const FetchFrames = ({ data, purpose }) => {
  // console.log(purpose)
  const [hoveredItem, setHoveredItem] = useState(null);

  const dispatch = useDispatch();

  // const cartItems = useSelector((state) => state.cart.items);

  const addtocart = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="flex flex-wrap gap-10 items-center justify-center relative">
      {data && data.length > 0 ? (
        data.map((item) => (
          <Link
            href={`/${item.id}`}
            className="w-[350px] flex flex-col relative cursor-pointer group "
            key={item.id}
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="relative">
              <div className="border-[15px] border-black dark:border-orange-500 bg-white p-20 py-28 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] group-hover:shadow-md relative">
                <img
                  src={item.imageURL}
                  alt="frame1"
                  className="h-52 object-cover"
                />
              </div>

              {hoveredItem === item && purpose !== "show" && (
                <div className="w-full h-full bg-black bg-opacity-50 absolute top-0 right-0 left-0 bottom-0 flex flex-col justify-center items-center">
                  <p className="text-white hover:bg-opacity-100 text-opacity-100 p-2">
                    {item.title}
                  </p>
                  <p className="text-white hover:bg-opacity-100 text-opacity-100 p-2">
                    {item.dimensions} Frame
                  </p>
                  <p className="text-white hover:bg-opacity-100 text-opacity-100 p-2">
                    Width: {item.width} Inches
                  </p>
                  <p className="text-white hover:bg-opacity-100 text-opacity-100 p-2">
                    Height: {item.height} Inches
                  </p>
                  <p className="text-white hover:bg-opacity-100 text-opacity-100 p-2">
                    Material: {item.material}
                  </p>
                  <p className=" text-red-700 rounded-lg bg-white hover:bg-opacity-100 font-semibold text-opacity-100 p-2">
                    Price: {item.price} RS
                  </p>
                  <button
                    className=" hover:shadow-lg text-white p-2 px-6 rounded-md mt-2 bg-black"
                    onClick={() => addtocart(item)}
                  >
                    Checkout
                  </button>
                </div>
              )}
            </div>
            {purpose !== "show" && (
              <p className="text-center mt-4">{item.title}</p>
            )}
          </Link>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <p className="text-xl md:text-3xl font-medium mt-7 md:mt-12">
            No Image is found
          </p>
          <img src={NotFound} alt="" />
        </div>
      )}
    </div>
  );
};

export default FetchFrames;
