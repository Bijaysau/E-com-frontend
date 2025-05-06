// import React from "react";
// import Tittle from "../components/Tittle";
// import { assets } from "../assets/assets";
// import NewsletterBox from "../components/NewsletterBox";
// const About = () => {
//   return (
//     <div>
//       <div className="text-2xl text-center pt-8 bordert">
//         <Tittle text1={"ABOUT"} text2={"US"} />
//       </div>
//       <div className="my-10 flex flex-col md:flex-row gap-16">
//         <img
//           className="w-full md:max-w-[450px]"
//           src={assets.about_img}
//           alt=""
//         />
//         <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
//           <p>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
//             fugit sunt numquam repellat atque architecto harum! Ipsam sint
//             asperiores ab consequuntur expedita, eveniet quo quis!
//           </p>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, illo
//             perspiciatis eaque impedit odio nihil?
//           </p>
//           <b className="text-gray-800">Our Mission</b>
//           <p>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
//             aut ab voluptate.
//           </p>
//         </div>
//       </div>
//       <div className="text-xl py-4">
//         <Tittle text1={"WHY"} text2={"CHOOSE US"} />
//       </div>
//       <div className="flex flex-col md:flex-row text-sm mb-20">
//         <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
//           <b>Quality Assurance:</b>
//           <p className="text-gray-600">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
//             dolor.
//           </p>
//         </div>
//         <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
//           <b>Convenience:</b>
//           <p className="text-gray-600">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
//             dolor.
//           </p>
//         </div>

//         <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
//           <b>Exceptional Customer Service:</b>
//           <p className="text-gray-600">
//             {" "}
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
//             dolor.
//           </p>
//         </div>
//       </div>
//       <NewsletterBox />
//     </div>
//   );
// };

// export default About;

import React from "react";
import Tittle from "../components/Tittle";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-white via-[#f9f9f9] to-white text-gray-800">
      {/* About Title */}
      <div className="text-center py-12">
        <Tittle text1="ABOUT" text2="US" />
        <p className="mt-2 text-gray-500 text-sm sm:text-base max-w-lg mx-auto">
          Discover our story, values, and what sets us apart in the world of
          shopping.
        </p>
      </div>

      {/* About Content */}
      <div className="flex flex-col md:flex-row items-center gap-10 px-5 md:px-20 pb-16">
        <img
          src={assets.about_img}
          alt="About"
          className="w-full md:max-w-md rounded-xl shadow-lg hover:scale-105 transition duration-300"
        />
        <div className="flex flex-col gap-5 md:w-1/2">
          <p className="leading-relaxed">
            We believe that shopping should be simple, inspiring, and full of
            joy. That’s why we’ve created a platform that delivers quality and
            trust — every single time.
          </p>
          <p className="leading-relaxed">
            Whether you're looking for essentials or unique finds, we strive to
            offer products that make life better, smoother, and more exciting.
          </p>
          <div>
            <h3 className="text-lg font-semibold mb-2">✨ Our Mission</h3>
            <p className="leading-relaxed">
              To elevate your lifestyle with top-tier products and unforgettable
              customer service — all backed by passion, precision, and care.
            </p>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="w-full h-[1px] bg-gray-200 mb-12"></div>

      {/* Why Choose Us */}
      <div className="text-center mb-10">
        <Tittle text1="WHY" text2="CHOOSE US" />
        <p className="text-sm sm:text-base text-gray-500 max-w-lg mx-auto mt-2">
          Here's what makes us stand out from the crowd — and why our customers
          keep coming back.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-20 pb-20">
        <div className="bg-white shadow-xl rounded-xl p-6 hover:shadow-2xl transition duration-300">
          <h4 className="text-xl font-semibold mb-2">✅ Premium Quality</h4>
          <p className="text-gray-600 leading-relaxed">
            From raw materials to packaging, everything is chosen with care to
            give you only the best.
          </p>
        </div>
        <div className="bg-white shadow-xl rounded-xl p-6 hover:shadow-2xl transition duration-300">
          <h4 className="text-xl font-semibold mb-2">
            ⚡ Effortless Experience
          </h4>
          <p className="text-gray-600 leading-relaxed">
            Enjoy seamless navigation, fast delivery, and a smooth checkout
            process that respects your time.
          </p>
        </div>
        <div className="bg-white shadow-xl rounded-xl p-6 hover:shadow-2xl transition duration-300">
          <h4 className="text-xl font-semibold mb-2">💬 Friendly Support</h4>
          <p className="text-gray-600 leading-relaxed">
            Got a question or concern? Our support team is just one message away
            — always ready to help.
          </p>
        </div>
      </div>

      {/* Newsletter */}
      <NewsletterBox />
    </div>
  );
};

export default About;
