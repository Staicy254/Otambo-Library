import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-black text-white py-8">
        <div className="container mx-auto px-8 md:px=16 lg:px-24">
          <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
            <div className="flex-1 mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Otambo Library</h3>
              <p className="text-gray-400">Software Engineer</p>
            </div>
            <div className="flex-1 w-full">
              <form className="flex items-center justify-center">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600
                        focus:outline-none focus:border-pink-400"
                />
                <button
                  className="bg-gradient-to-r from-pink-400 to-blue-400 text-white
            px-4 py-2 rounded-r-lg"
                  onClick={() =>
                    (window.location.href = "mailto:jeanstaicy21@gmail.com")
                  }
                >
                  Text
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 mt-8">
          © 2024 Otambo Library. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
