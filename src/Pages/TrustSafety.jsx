import React from "react";
import HeaderLayout from "./Layout/HeaderLayout"; 
import FooterLayout from "./Layout/FooterLayout"; 

const TrustandSafety = () => {
  return (
    <>
      {/* Header */}
      <HeaderLayout />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Trust & Safety</h1>
        <h2 className="text-lg font-semibold text-gray-600 mb-2">We value your privacy</h2>

        <div className="text-gray-700 space-y-4">
          {/* Add actual privacy content here */}
          <p>[Insert Trust and Safety content Here]</p>
        </div>
      </main>

      {/* Chat Button */}
      <div className="fixed bottom-8 right-8">
            <button className="bg-[#4A5D45] text-white rounded-full p-4 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </button>
      </div>

      {/* Footer */}
      <FooterLayout />
    </>
  );
};

export default TrustandSafety;
