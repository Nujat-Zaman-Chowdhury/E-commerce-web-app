import React from "react";
import img from "../../../public/Image (2).png";
import cross from "../../../public/cross.png";

const OrderDetails = () => {
  return (
    <div className="container mx-auto flex gap-16">
      {/* left side */}
      <div className="font-barlow w-[740px]">
        <h1 className="text-[#1E1E1E] text-[20px] font-semibold mb-10">
          An overview of your order
        </h1>
        <div className="p-6 bg-[#FAFAFA] rounded-xl grid grid-rows-1">
            
          <div className="">
            <div className="flex justify-between">
              <div className="flex items-center">
                {/* increase decrease btn */}
                <div className="border border-[#DEDEDE] mr-3">
                  <button
                    //   disabled={medicine.quantity === 1}
                    //   onClick={() => handleDecrease(medicine._id)}
                    className=" text-[#CFCFCF] px-3 rounded text-lg font-bold m-2 disabled:cursor-not-allowed"
                  >
                    -
                  </button>
                  1
                  <button
                    //   onClick={() => handleIncrease(medicine._id)}
                    className=" text-[#5C5C5C] px-3 rounded text-lg font-bold m-2"
                  >
                    +
                  </button>
                </div>

                {/* image */}
                <div className="flex gap-4">
                  <img
                    src={img}
                    alt=""
                    className="w-[88px] h-[88px] rounded-xl"
                  />
                  <h4 className="text-[#434343] font-bold">
                    Recliner Chair Steel
                  </h4>
                </div>
              </div>
              <div>
                <img src={cross} alt="" />
              </div>
            </div>
            <div className="flex justify-end text-[#0E0E0E] text-xl font-semibold mt-2">
              <p>€299.00</p>
            </div>
          </div>
            <hr  className="my-[20px] bg-[#ECECEC]"/>
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
                <p className="text-[#656565] font-medium">€ 1071.00</p>
               </div>
               <div className="flex justify-between  text-xl">
                <h5 className="text-[#656565]">Subtotal</h5>
                <p className="text-[#656565] font-medium">€ 1071.00</p>
               </div>
               <div className="flex justify-between  text-xl">
                <h5 className="text-[#656565]">Subtotal</h5>
                <p className="text-[#656565] font-medium">€ 1071.00</p>
               </div>
            </div>
    <hr  className="my-[20px] bg-[#ECECEC]"/>
    <div className="flex justify-between font-semibold  text-2xl">
                <h5 className="text-[#656565] ">Total</h5>
                <p className="text-[#0E0E0E]">€ 1071.00</p>
               </div>
        </div>
    
        <button className="btn bg-black w-full text-white mt-6 flex justify-center rounded-md font-barlow uppercase">Go to Checkout</button>
    
      </div>
    </div>
  );
};

export default OrderDetails;
