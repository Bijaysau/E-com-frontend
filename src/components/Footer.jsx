// import React from "react";
// import { assets } from "../assets/assets";

// const Footer = () => {
//   return (
//     <div>
//       <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
//         <div>
//           <img className="mb-5 w-32" src={assets.logo} alt="" />
//           <p className="w-full md:w-2/3 text-gray-600">
//             loream ipsum dolor sit amet consectetur adipisicing elit. Quisquam
//           </p>
//         </div>
//         <div>
//           {" "}
//           <p className="text-xl font-medium mb-5">COMPANY</p>
//           <ul className="flex flex-col gap-1 text-gray-600">
//             <li>HOME</li>
//             <li>About</li>
//             <li>Delivery</li>
//             <li>Privacy policy</li>
//           </ul>
//         </div>
//         <div>
//           <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
//           <ul className="flex flex-col gap-1 text-gray-600">
//             <li>+911234567890</li>
//             <li>contact@worncom.com</li>
//           </ul>
//         </div>
//       </div>
//       <div>
//         <hr />
//         <p className="py-5 text-sm text-center">
//           Copyright 2025@ worncom.comm -All Right Reserved{" "}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Logo and Description */}
        <div>
          <img className="mb-5 w-32" src={assets.logo} alt="Worncom Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Discover premium fashion designed for comfort and crafted for style.
            At Worncom, we bring you timeless pieces made to elevate your
            everyday.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xl font-semibold mb-5 text-gray-800">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <Link to={"/"}>
              <li className="hover:text-black cursor-pointer transition">
                Home
              </li>{" "}
            </Link>
            <li className="hover:text-black cursor-pointer transition">
              About Us
            </li>
            <li className="hover:text-black cursor-pointer transition">
              Delivery Info
            </li>
            <li className="hover:text-black cursor-pointer transition">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="text-xl font-semibold mb-5 text-gray-800">
            GET IN TOUCH
          </p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:text-black cursor-pointer transition">
              +91 123 456 7890
            </li>
            <li className="hover:text-black cursor-pointer transition">
              contact@worncom.com
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Line */}
      <div>
        <hr className="border-gray-300" />
        <p className="py-5 text-sm text-center text-gray-500">
          &copy; {new Date().getFullYear()} Worncom.com — All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
