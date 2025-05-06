// import React from "react";
// import { assets } from "../assets/assets";
// import Tittle from "../components/Tittle";
// import NewsletterBox from "../components/NewsletterBox";
// const Contact = () => {
//   return (
//     <div>
//       <div className="text-center text-2xl pt-10 border-t">
//         <Tittle text1={"CONTACT"} text2={"US"} />
//       </div>
//       <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
//         <img
//           className="w-full md:max-w-[480px]"
//           src={assets.contact_img}
//           alt=""
//         />
//         <div className="flex flex-col justify-center items-start gap-6">
//           <p className="font-semibold text-xl text-gray-600">Our Store</p>
//           <p className="text-gray-500">
//             54709 Howrah Station <br /> Suite 350,kolkata,India
//           </p>
//           <p className="text-gray-500">
//             Tel: (+91)123 456 7890
//             <br />
//             admincontact@worncom.com
//           </p>
//           <p className="font-semibold text-xl text-gray-600">
//             Careers at Worncom
//           </p>
//           <p className="text-gray-500">
//             Learn more about our teams and job openings.
//           </p>
//           <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
//             Explore Jobs
//           </button>
//         </div>
//       </div>
//       <NewsletterBox />
//     </div>
//   );
// };

// export default Contact;

// import React from "react";
// import { assets } from "../assets/assets";
// import Tittle from "../components/Tittle";

// const Contact = () => {
//   return (
//     <div className="bg-gradient-to-b from-white via-[#f9f9f9] to-white text-gray-800">
//       {/* Title */}
//       <div className="text-center pt-12">
//         <Tittle text1="CONTACT" text2="US" />
//         <p className="text-sm sm:text-base text-gray-500 max-w-md mx-auto mt-2">
//           We'd love to hear from you! Reach out with questions, feedback, or
//           just to say hello.
//         </p>
//       </div>

//       {/* Contact Section */}
//       <div className="flex flex-col-reverse md:flex-row items-center gap-10 px-6 md:px-20 py-16">
//         {/* Contact Form */}
//         <form
//           className="flex flex-col gap-4 bg-white rounded-xl shadow-lg p-6 w-full md:w-1/2"
//           onSubmit={(e) => e.preventDefault()}
//         >
//           <label className="text-sm text-gray-600">Name</label>
//           <input
//             type="text"
//             placeholder="Your name"
//             className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
//             required
//           />

//           <label className="text-sm text-gray-600">Email</label>
//           <input
//             type="email"
//             placeholder="Your email"
//             className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
//             required
//           />

//           <label className="text-sm text-gray-600">Message</label>
//           <textarea
//             placeholder="Write your message..."
//             rows={4}
//             className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none"
//             required
//           ></textarea>

//           <button
//             type="submit"
//             className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition duration-300"
//           >
//             Send Message
//           </button>
//         </form>

//         {/* Contact Image */}
//         <img
//           className="w-full md:max-w-md rounded-xl shadow-md hover:scale-105 transition duration-300"
//           src={assets.contact_img}
//           alt="Contact"
//         />
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from "react";
import { assets } from "../assets/assets";
import Tittle from "../components/Tittle";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-white via-[#fdfdfd] to-white text-gray-800">
      {/* Title */}
      <div className="text-center text-2xl pt-10 border-t">
        <Tittle text1="CONTACT" text2="US" />
        <p className="text-sm text-gray-500 max-w-md mx-auto mt-2">
          We’d love to hear from you. Whether it’s feedback, questions, or
          business inquiries, we’re all ears.
        </p>
      </div>

      {/* Main Content */}
      <div className="my-16 px-6 md:px-20 flex flex-col justify-center md:flex-row gap-12 md:gap-20 mb-28 items-center">
        {/* Image */}
        <img
          className="w-full md:max-w-[500px] rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          src={assets.contact_img}
          alt="Contact"
        />

        {/* Info Box */}
        <div className="flex flex-col justify-center items-start gap-6 max-w-md">
          <div>
            <p className="text-2xl font-semibold text-gray-700">Our Store</p>
            <p className="text-gray-500 mt-2 leading-relaxed">
              54709, Howrah Station <br />
              Suite 350, Kolkata, India
            </p>
          </div>

          <div>
            <p className="text-gray-500 leading-relaxed">
              Tel:{" "}
              <a href="tel:+911234567890" className="hover:underline">
                (+91) 123 456 7890
              </a>
              <br />
              Email:{" "}
              <a
                href="mailto:admincontact@worncom.com"
                className="hover:underline"
              >
                admincontact@worncom.com
              </a>
            </p>
          </div>

          <div>
            <p className="text-2xl font-semibold text-gray-700">
              Careers at Worncom
            </p>
            <p className="text-gray-500 mt-2">
              Discover open roles and become part of our growing team.
            </p>
          </div>

          <button className="mt-2 border border-black px-8 py-3 text-sm tracking-wide hover:bg-black hover:text-white transition-all duration-300">
            Explore Jobs
          </button>
        </div>
      </div>

      {/* Newsletter Box */}
      <NewsletterBox />
    </div>
  );
};

export default Contact;
