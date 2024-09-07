import React, { useContext, useEffect } from "react";
import img from "../../../public/Image (2).png";
import cross from "../../../public/cross.png";
import { CartContext } from "../../providers/CartProvider";

const OrderDetails = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, getSubtotal } = useContext(CartContext);
  useEffect(()=>{
    window.scroll(0,0)
},[])
  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-10 lg:gap-16 p-2 lg:p-0">
      {/* left side */}
      <div className="font-barlow w-full md:w-[740px]">
        <h1 className="text-[#1E1E1E] text-[20px] font-semibold mb-10">
          An overview of your order
        </h1>
        <div className="p-6 bg-[#FAFAFA] rounded-xl grid grid-rows-1">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div key={index} className="">
                <div className="flex justify-between">
                  <div className="flex flex-col md:flex-row md:items-center">
                    {/* increase decrease btn */}
                    <div className="md:border md:border-[#DEDEDE] mr-3">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className=" text-[#CFCFCF] px-3 rounded text-lg font-bold m-2"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                     {item.quantity}
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className=" text-[#5C5C5C] px-3 rounded text-lg font-bold m-2"
                      >
                        +
                      </button>
                    </div>

                    {/* image */}
                    <div className="flex gap-4">
                      <img
                        src={item?.image}
                        alt=""
                        className="w-[88px] h-[88px] rounded-xl"
                      />
                      <h4 className="text-[#434343] font-bold">{item?.name}</h4>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="cursor-pointer hover:shadow-md h-6 w-6 hover:border hover:border-red-400"
                  >
                    <img src={cross} alt="" />
                  </button>
                </div>
                <div className="flex justify-end text-[#0E0E0E] text-xl font-semibold mt-2">
                  <p>€{item.price.toFixed(2)}</p>
                </div>
                <hr className="my-[20px] bg-[#ECECEC]" />
              </div>
            ))
          ) : (
            <p className="text-black text-center text-2xl my-10">
              Your Cart is empty
            </p>
          )}
        </div>
      </div>

      {/* right side order details */}
      <div className="flex-1">
        <h1 className="text-[#1E1E1E] text-[20px] font-semibold mb-10">
          Oder details
        </h1>
        <div className="bg-[#FAFAFA] rounded-xl p-6 border border-[#DEDEDE]">
          <div className="space-y-3">
            <div className="flex justify-between  text-xl">
              <h5 className="text-[#656565]">Subtotal</h5>
              <p className="text-[#656565] font-medium">€{getSubtotal().toFixed(2)}</p>
            </div>
            <div className="flex justify-between  text-xl">
              <h5 className="text-[#656565]">Shipping</h5>
              <p className="text-[#656565] font-medium">Free</p>
            </div>
            <div className="flex justify-between  text-xl">
              <h5 className="text-[#656565] flex items-center gap-2">
                Estimated Tax{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M14.6693 8.0026C14.6693 4.3207 11.6845 1.33594 8.0026 1.33594C4.3207 1.33594 1.33594 4.3207 1.33594 8.0026C1.33594 11.6845 4.3207 14.6693 8.0026 14.6693C11.6845 14.6693 14.6693 11.6845 14.6693 8.0026Z"
                    stroke="#656565"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M8.15885 11.3359V8.0026C8.15885 7.68834 8.15885 7.5312 8.06119 7.43354C7.96359 7.33594 7.80645 7.33594 7.49219 7.33594"
                    stroke="#656565"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.99219 5.33594H7.99819"
                    stroke="#656565"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </h5>
              <p className="text-[#656565] font-medium">€ -</p>
            </div>
          </div>
          <hr className="my-[20px] bg-[#ECECEC]" />
          <div className="flex justify-between font-semibold  text-2xl">
            <h5 className="text-[#656565] ">Total</h5>
            <p className="text-[#0E0E0E]">€{getSubtotal().toFixed(2)}</p>
          </div>
        </div>

        <button className="btn bg-black w-full text-white mt-6 flex justify-center rounded-md font-barlow uppercase">
          Go to Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;
