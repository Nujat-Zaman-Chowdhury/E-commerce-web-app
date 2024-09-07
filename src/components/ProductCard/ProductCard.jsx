import React, { useContext } from "react";
import img1 from "../../../public/Image (1).png";
import { CartContext } from "../../providers/CartProvider";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, name, price, originalPrice, discount, description, image } =
    product;

  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  // handle add to cart
  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div className="flex flex-col p-4 gap-8 border border-[#F1F1F1] rounded-lg font-barlow">
      <img
        src={image}
        alt="product image"
        className="w-full rounded-lg object-cover"
      />
      <div className="">
        <h3 className="text-lg font-semibold text-[#343434]">{name}</h3>
        <p className="flex flex-row gap-3 my-4 text-lg">
          <span className="text-[#343434] text-lg  font-bold">{price}</span>
          <span className="line-through text-[#ABABAB] text-lg font-medium">
            {originalPrice}
          </span>
          <span className="text-[#B92E2E] font-semibold">{discount}</span>
        </p>
        <p className="text-[#838383] mb-7 w-[237px]">{description}</p>
      </div>
      <div className="flex flex-1 justify-end items-end">
        
        {/* add to cart btn */}
        <button
          onClick={() => handleAddToCart(product)}
          className="bg-[#202020] text-white py-2 px-4 rounded hover:bg-gray-600 w-full flex gap-3 justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M3.18982 12.7641L2.28715 7.37937C2.15067 6.56522 2.08243 6.15815 2.30095 5.89133C2.51948 5.62451 2.92111 5.62451 3.72439 5.62451H14.846C15.6492 5.62451 16.0508 5.62451 16.2694 5.89133C16.4879 6.15815 16.4196 6.56522 16.2832 7.37937L15.3805 12.7641C15.0813 14.5488 14.9317 15.4412 14.3209 15.9704C13.7102 16.4995 12.8297 16.4995 11.0688 16.4995H7.50152C5.74063 16.4995 4.86018 16.4995 4.24939 15.9704C3.63861 15.4412 3.48901 14.5488 3.18982 12.7641Z"
              stroke="white"
              strokeWidth="1.6875"
            />
            <path
              d="M13.4062 5.62598C13.4062 3.3478 11.5594 1.50098 9.28125 1.50098C7.00307 1.50098 5.15625 3.3478 5.15625 5.62598"
              stroke="white"
              strokeWidth="1.6875"
            />
          </svg>{" "}
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
