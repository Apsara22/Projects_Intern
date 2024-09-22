import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export default function Contact() {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3>Let's Talk</h3>
            <p>
              I'm open to discussing web development prjectgs or partnership
              opportunities.
            </p>
            <div className="mb-4 mt-8">
                <FaEnvelope className="inline-block text-green-400 mr-2"/>
                <a href="paneruapsara831ap@gmail.com" className="hover:underline">youremail@example.com</a>

            </div>
            <div className="mb-4 mt-8">
                <FaPhone className="inline-block text-green-400 mr-2"/>
                <span>+977 975454333566</span>

            </div>
            <div className="mb-4 mt-8">
                <IoLocationOutline className="inline-block text-green-400 mr-2"/>
                <span>District,city,street</span>

            </div>
          </div>
        </div>
        <div className="flex-1 w-full">
            <form className="space-y-4">
                <div>
                    <label htmlFor="name" className="block mb-2">Your Name</label>
                    <input type="text" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-e-green-400  " placeholder="Enter Your Name" />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2">Your Email</label>
                    <input type="text" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none 
                    focus:border-e-green-400  " placeholder="Enter Your email" />
                </div>
                <div>
                    <label htmlFor="message" className="block mb-2">message</label>
                    <input type="text" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                     focus:border-e-green-400  " placeholder="Enter Your message" aria-rowspan="5" />
                </div>

            </form>

        </div>
      </div>
    </div>
  );
}
