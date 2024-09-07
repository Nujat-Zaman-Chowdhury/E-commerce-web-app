import React, { useContext, useEffect, useState } from "react";
import main from "../../../public/main.png";
import icon from "../../../public/icon.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const {user, signUp,setLoading} = useContext(AuthContext)

  

  useEffect(() => {
    setFullName(`${firstName} ${lastName}`.trim());
  }, [firstName, lastName]);

  const handleSignUp =async (e)=>{
    e.preventDefault();

    if (!email || !password) {
      setError("Email and Password are required.");
      setLoading(false);
      return;
    }
    try {
      const data = await signUp({ email, password, fullName });
      
    } catch (err) {
      setError("Signup failed. Please try again.");
      toast.error(err)
      console.error("Error during signup:", err);
    } finally {
      setLoading(false);
    }
    // console.log(email,password)
  }

  useEffect(()=>{
    if(user){
      navigate('/products')
    }
  },[user])
  return (
    <div className="w-full flex flex-col lg:flex-row h-[1024px]">
      <div className="w-full lg:w-1/2 lg:flex  lg:justify-center lg:items-center">
        <div className="bg-[#FAFAFA] p-6 font-barlow rounded-md">
          <div className="text-center">
            {error && <p className="text-xs text-red-400">{error}</p>}
            <h5 className="text-black font-barlow text-2xl font-bold">
              Welcome To
            </h5>
            <h3 className="font-inter text-black text-[40px] font-bold mt-[6px] mb-[2px]">
              Furni<span className="text-[#1E99F5]">Flex</span>
            </h3>
            <p className="text-[#707070] font-medium">
              Signup for purchase your desire products
            </p>
          </div>
          <form noValidate="" action="" className="space-y-12 pt-4" onSubmit={handleSignUp}>
            <div className="flex gap-3">
              <div className="h-[52px] bg-white border border-[#dad5d5] flex flex-col items-start p-2 flex-1 rounded-md">
                <label htmlFor="firstName" className=" text-xs text-[#707070]">
                  First name (optional)
                </label>
                <input
                  type="name"
                  name="firstName"
                  id="firstName"
                  placeholder="Jordan"
                  className="w-full focus:outline-none h-full placeholder-black"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="h-[52px] bg-white border border-[#dad5d5] flex flex-col items-start p-2 flex-1 rounded-md">
                <label htmlFor="lastName" className=" text-xs text-[#707070]">
                  Last name (optional)
                </label>
                <input
                  type="name"
                  name="lastName"
                  id="lastName"
                  placeholder="Ken"
                  className="w-full focus:outline-none h-full placeholder-black"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-[52px] bg-white border border-[#dad5d5] flex flex-col items-start p-2 flex-1 rounded-md">
                <label htmlFor="email" className=" text-xs text-[#707070]">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  id="email"
                  placeholder="jordan@email.com"
                  className="w-full focus:outline-none h-full placeholder-black"
                  onChange={(e)=>setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <div className="h-[52px] bg-white border border-[#dad5d5] flex flex-col items-start p-2 flex-1 rounded-md">
                  <label htmlFor="email" className=" text-xs text-[#707070]">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    id="password"
                    placeholder="*******"
                    className="w-full focus:outline-none h-full placeholder-black"
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  aria-label="Remember me"
                  className="mr-1 rounded-sm "
                />
                <label
                  htmlFor="remember"
                  className="text-sm  font-barlow font-medium text-[#000000] "
                >
                  I agree to the{" "}
                  <span className="underline">Terms & Policy</span>
                </label>
              </div>
            </div>
            <div>
                <button
                 
                  className="w-full px-8 py-3 font-semibold rounded-md bg-black text-white text-[17px]"
                >
                  Signup
                </button>
              </div>
              </form>
            <div className="space-y-2">
              
              <div className="flex items-center w-full my-[14px]">
                <hr className="w-full text-gray-400" />
                <p className="px-3 text-black text-xs">or</p>
                <hr className="w-full text-gray-400" />
              </div>

              <div className="flex flex-col lg:flex-row gap-4">
                <div className="btn  bg-none shadow-none flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border border-[#D9D9D9] rounded-md ">
                  <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#1976D2"
                    />
                  </svg>

                  <span className="mx-2">Sign in with Google</span>
                </div>
                <div className="btn  bg-none shadow-none flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border border-[#D9D9D9] rounded-md ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_16_4997)">
                      <path
                        d="M17.4864 0.32119C16.1252 0.413065 14.6683 1.22307 13.7664 2.31619C12.977 3.27807 12.3152 4.68994 12.5664 6.15619C12.3414 6.08682 12.137 6.07932 11.8914 5.99119C11.222 5.75307 10.457 5.49619 9.5064 5.49619C7.61828 5.49619 5.68515 6.61932 4.4664 8.49619C2.69265 11.2224 3.0489 16.0206 5.7414 20.1212C6.21578 20.8412 6.7689 21.6268 7.4514 22.2512C8.1339 22.8756 8.9589 23.3518 9.9264 23.3612C10.7533 23.3706 11.3289 23.0949 11.8464 22.8662C12.3639 22.6374 12.8458 22.4349 13.7514 22.4312C13.757 22.4312 13.7608 22.4312 13.7664 22.4312C14.6683 22.4237 15.1352 22.6224 15.6414 22.8512C16.1477 23.0799 16.7177 23.3687 17.5464 23.3612C18.5327 23.3537 19.3708 22.8137 20.0664 22.1462C20.762 21.4787 21.3339 20.6593 21.8064 19.9412C22.4833 18.9099 22.7552 18.3474 23.2764 17.1962C23.3308 17.0762 23.3327 16.9374 23.2802 16.8156C23.2295 16.6937 23.1302 16.5981 23.0064 16.5512C21.3002 15.9062 20.327 14.3968 20.1864 12.8012C20.0458 11.2056 20.7208 9.56307 22.4214 8.63119C22.547 8.56369 22.6352 8.44557 22.6652 8.30682C22.6933 8.16807 22.6595 8.02182 22.5714 7.91119C21.3508 6.39432 19.6333 5.49619 17.9514 5.49619C16.8789 5.49619 16.0914 5.74932 15.4464 5.99119C15.3395 6.03244 15.2608 6.02869 15.1614 6.06619C15.8158 5.72119 16.3933 5.24307 16.8264 4.68619C17.6139 3.67557 18.2214 2.23744 17.9964 0.72619C17.9589 0.47869 17.7358 0.30244 17.4864 0.32119ZM16.9764 1.46119C16.9445 2.43057 16.6127 3.37932 16.0614 4.08619C15.4839 4.82869 14.5127 5.34244 13.5714 5.49619C13.5883 4.56432 13.9558 3.59869 14.5164 2.91619C15.1052 2.20369 16.0802 1.68994 16.9764 1.46119ZM9.5064 6.45619C9.9264 6.45619 10.9014 6.65682 11.5614 6.89119C12.2214 7.12557 12.917 7.40119 13.7364 7.40119C14.537 7.40119 15.1708 7.12369 15.7914 6.89119C16.412 6.65869 17.0308 6.45619 17.9514 6.45619C19.1533 6.45619 20.4527 7.08057 21.4764 8.16619C19.8377 9.32307 19.0708 11.1268 19.2264 12.8762C19.382 14.6443 20.447 16.3224 22.1964 17.1962C22.1939 17.2016 22.1914 17.2071 22.1889 17.2125C21.8143 18.0284 21.5646 18.5724 21.0114 19.4162C20.552 20.1156 20.0064 20.8806 19.4064 21.4562C18.8064 22.0318 18.1708 22.3956 17.5314 22.4012C16.9145 22.4068 16.5639 22.2231 16.0314 21.9812C15.4989 21.7393 14.8108 21.4618 13.7514 21.4712C12.6939 21.4768 11.9964 21.7431 11.4564 21.9812C10.9164 22.2193 10.562 22.4068 9.9414 22.4012C9.28515 22.3956 8.67578 22.0768 8.0964 21.5462C7.51703 21.0156 6.9939 20.2918 6.5364 19.5962C4.0164 15.7562 3.8139 11.2449 5.2614 9.02119C6.32265 7.38807 9.0864 6.45619 9.5064 6.45619Z"
                        fill="black"
                      />
                      <path
                        d="M9.5064 6.45619C9.9264 6.45619 10.9014 6.65682 11.5614 6.89119C12.2214 7.12557 12.917 7.40119 13.7364 7.40119C14.537 7.40119 15.1708 7.12369 15.7914 6.89119C16.412 6.65869 17.0308 6.45619 17.9514 6.45619C19.1533 6.45619 20.4527 7.08057 21.4764 8.16619C19.8377 9.32307 19.0708 11.1268 19.2264 12.8762C19.382 14.6443 20.447 16.3224 22.1964 17.1962L22.1889 17.2125C21.8143 18.0284 21.5646 18.5724 21.0114 19.4162C20.552 20.1156 20.0064 20.8806 19.4064 21.4562C18.8064 22.0318 18.1708 22.3956 17.5314 22.4012C16.9145 22.4068 16.5639 22.2231 16.0314 21.9812C15.4989 21.7393 14.8108 21.4618 13.7514 21.4712C12.6939 21.4768 11.9964 21.7431 11.4564 21.9812C10.9164 22.2193 10.562 22.4068 9.9414 22.4012C9.28515 22.3956 8.67578 22.0768 8.0964 21.5462C7.51703 21.0156 6.9939 20.2918 6.5364 19.5962C4.0164 15.7562 3.8139 11.2449 5.2614 9.02119C6.32265 7.38807 9.0864 6.45619 9.5064 6.45619Z"
                        fill="black"
                      />
                      <path
                        d="M16.9764 1.46119C16.9445 2.43057 16.6127 3.37932 16.0614 4.08619C15.4839 4.82869 14.5127 5.34244 13.5714 5.49619C13.5883 4.56432 13.9558 3.59869 14.5164 2.91619C15.1052 2.20369 16.0802 1.68994 16.9764 1.46119Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_16_4997">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0 0.320801)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <span className="mx-2">Sign in with Apple</span>
                </div>
              </div>
              <p className="px-6 text-sm text-center text-black font-medium my-5">
                Have an account?
                <Link to="/login" className="hover:underline text-[#0F3DDE]">
                  Sign In
                </Link>
              </p>
            </div>
          
        </div>
      </div>
      <div
        className="w-full lg:w-1/2 h-full bg-cover relative flex justify-center items-center"
        style={{ backgroundImage: `url(${main})` }}
      >
        <div className="absolute flex flex-col justify-center items-center ">
          <img src={icon} alt="" />
          <h4 className="font-inter text-white text-[40px] font-bold mt-[6px]">
            Furni<span className="text-[#1E99F5]">Flex</span>
          </h4>
          <p className="text-[#C8C4C4] font-barlow font-medium w-full md:w-[445px] mx-auto text-center">
            Discover a seamless shopping experience with our curated collection
            of products. From fashion to electronics, we bring quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
