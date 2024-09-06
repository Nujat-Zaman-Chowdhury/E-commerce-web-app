import React from "react";
import logo from "../../../public/footerlogo.png";
import flag from "../../../public/🇺🇸.png"

const Footer = () => {
  return (
    <footer className="px-[100px] pb-6 pt-20 bg-[#0E0E0E] mt-[96px]">
      <div className="flex flex-col justify-between py-10 space-y-8 lg:flex-row lg:space-y-0">
        <div className="cursor-pointer">
          <img src={logo} alt="" />
        </div>
        <div className="flex text-sm gap-x-10 gap-y-8 space-x-[120px] font-barlow">
          <div className="space-y-3">
            <h3 className="tracking-wide text-lg font-semibold text-white">About Us</h3>
            <ul className="text-[#81859F] text-lg font-medium">
              <li>
                <a href="#">Master Plan</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Invest</a>
              </li>
              <li>
                <a href="#">Pressroom</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide text-lg font-semibold text-white">Explore EEVE</h3>
            <ul className="text-[#81859F] text-lg font-medium">
              <li>
                <a href="#">Unlock my Robot Power</a>
              </li>
              <li>
                <a href="#">Stersight</a>
              </li>
              <li>
                <a href="#">Robot Platform</a>
              </li>
              <li>
                <a href="#">EEVE Roadmap</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white">Community & Support</h3>
            <ul className="text-[#81859F] text-lg font-medium">
              <li>
                <a href="#">Willow X Community</a>
              </li>
              <li>
                <a href="#">Developer & Maker Access</a>
              </li>
              <li>
                <a href="#">Special Cases</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-[#252948] mt-[100px]" />
      <div className="flex justify-between mt-10 mb-[44px]">
        <div className="flex gap-[11px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.15282 8.61043C4.33802 8.61043 4.16797 8.77035 4.16797 9.53635V10.9253C4.16797 11.6913 4.33802 11.8512 5.15282 11.8512H7.12251V17.4068C7.12251 18.1728 7.29256 18.3327 8.10736 18.3327H10.0771C10.8919 18.3327 11.0619 18.1728 11.0619 17.4068V11.8512H13.2736C13.8916 11.8512 14.0508 11.7383 14.2206 11.1797L14.6426 9.79077C14.9334 8.83385 14.7542 8.61043 13.6956 8.61043H11.0619V6.29565C11.0619 5.78427 11.5028 5.36972 12.0467 5.36972H14.8498C15.6646 5.36972 15.8346 5.20984 15.8346 4.44379V2.59194C15.8346 1.82589 15.6646 1.66602 14.8498 1.66602H12.0467C9.32714 1.66602 7.12251 3.73877 7.12251 6.29565V8.61043H5.15282Z"
              stroke="#DFDFDF"
              strokeWidth="1.42857"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M2.51074 9.99772C2.51074 6.26577 2.51074 4.3998 3.67011 3.24042C4.82948 2.08105 6.69546 2.08105 10.4274 2.08105C14.1593 2.08105 16.0253 2.08105 17.1847 3.24042C18.3441 4.3998 18.3441 6.26577 18.3441 9.99772C18.3441 13.7296 18.3441 15.5956 17.1847 16.7551C16.0253 17.9144 14.1593 17.9144 10.4274 17.9144C6.69546 17.9144 4.82948 17.9144 3.67011 16.7551C2.51074 15.5956 2.51074 13.7296 2.51074 9.99772Z"
              stroke="#DFDFDF"
              strokeWidth="1.42857"
              strokeLinejoin="round"
            />
            <path
              d="M14.1787 10C14.1787 12.0711 12.4998 13.75 10.4287 13.75C8.35764 13.75 6.67871 12.0711 6.67871 10C6.67871 7.92893 8.35764 6.25 10.4287 6.25C12.4998 6.25 14.1787 7.92893 14.1787 10Z"
              stroke="#DFDFDF"
              strokeWidth="1.42857"
            />
            <path
              d="M15.0182 5.41553H15.0107"
              stroke="#DFDFDF"
              strokeWidth="1.42857"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M3.35693 17.5L9.64727 11.2097M9.64727 11.2097L3.35693 2.5H7.5236L12.0666 8.79033M9.64727 11.2097L14.1903 17.5H18.3569L12.0666 8.79033M18.3569 2.5L12.0666 8.79033"
              stroke="#DFDFDF"
              strokeWidth="1.42857"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M4.03695 7.91589H3.62028C2.8346 7.91589 2.44177 7.91589 2.19769 8.15997C1.95361 8.40406 1.95361 8.79689 1.95361 9.58256V16.6659C1.95361 17.4516 1.95361 17.8444 2.19769 18.0885C2.44177 18.3326 2.8346 18.3326 3.62028 18.3326H4.03695C4.82262 18.3326 5.21545 18.3326 5.45954 18.0885C5.70361 17.8444 5.70361 17.4516 5.70361 16.6659V9.58256C5.70361 8.79689 5.70361 8.40406 5.45954 8.15997C5.21545 7.91589 4.82262 7.91589 4.03695 7.91589Z"
              stroke="#DFDFDF"
              strokeWidth="1.42857"
            />
            <path
              d="M5.70361 3.54089C5.70361 4.57643 4.86415 5.41589 3.82861 5.41589C2.79308 5.41589 1.95361 4.57643 1.95361 3.54089C1.95361 2.50536 2.79308 1.66589 3.82861 1.66589C4.86415 1.66589 5.70361 2.50536 5.70361 3.54089Z"
              stroke="#DFDFDF"
              strokeWidth="1.42857"
            />
            <path
              d="M10.5586 7.91589H9.87028C9.08461 7.91589 8.69178 7.91589 8.44769 8.15997C8.20361 8.40406 8.20361 8.79689 8.20361 9.58256V16.6659C8.20361 17.4516 8.20361 17.8444 8.44769 18.0885C8.69178 18.3326 9.08461 18.3326 9.87028 18.3326H10.2869C11.0726 18.3326 11.4654 18.3326 11.7095 18.0885C11.9536 17.8444 11.9536 17.4516 11.9536 16.6659L11.9537 13.7493C11.9537 12.3686 12.3937 11.2493 13.6935 11.2493C14.3434 11.2493 14.8703 11.809 14.8703 12.4993V16.2493C14.8703 17.035 14.8703 17.4278 15.1144 17.6719C15.3584 17.916 15.7513 17.916 16.5369 17.916H16.9525C17.738 17.916 18.1308 17.916 18.3749 17.672C18.6189 17.428 18.619 17.0352 18.6192 16.2497L18.6204 11.6661C18.6204 9.59506 16.6506 7.91609 14.7009 7.91609C13.591 7.91609 12.6009 8.46014 11.9537 9.31089C11.9536 8.78581 11.9536 8.52331 11.8396 8.32839C11.7674 8.20494 11.6645 8.10217 11.5411 8.02995C11.3462 7.91589 11.0837 7.91589 10.5586 7.91589Z"
              stroke="#DFDFDF"
              strokeWidth="1.42857"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <p className="text-[#81859F] flex gap-6 font-medium">
            <a href="">March22 Recap</a>
            <a href="#">Privacy Policy</a>
            <a href="#">General Terms</a>
            <a href="#">Contact</a>
          </p>
        </div>
        <div className="flex gap-1">
        <img src={flag} alt="" />
<p className="text-[#81859F]">United States (English)</p>
        </div>
      </div>
      <div className="py-6 text-sm text-center text-[#323544] font-medium">
        EEVE © 2024. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
