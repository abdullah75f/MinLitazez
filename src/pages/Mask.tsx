import guyyaMin2 from "../assets/images/guyyaMin2.png";

const Mask = () => {
  return (
    <div className="relative py-16 min-h-screen flex items-center justify-center bg-fixed bg-gray-900 font-serif">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-400 opacity-50"></div>

      {/* Content container */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center text-white">
        <h1 className="mb-6 text-3xl sm:text-5xl font-extrabold tracking-wide text-blue-300 uppercase">
          Guyya Medical Face Mask
        </h1>

        <div className="p-6 sm:p-8 bg-blue-100 bg-opacity-95 rounded-2xl shadow-2xl">
          <img
            src={guyyaMin2}
            alt="Guyya Facemask"
            className="w-full h-auto rounded-lg mb-4 sm:mb-6 shadow-lg"
          />
          <p className="text-2xl sm:text-4xl font-bold text-blue-900 mb-2 sm:mb-3 tracking-tight">
            Order Your Guyya Face mask Now!
          </p>
          <p className="text-xl sm:text-3xl font-semibold text-blue-900 mb-2 sm:mb-3 leading-relaxed">
            ጭምብልዎን ይሸምቱ ፤<br />
            ደህንነትዎን ይጠብቁ!
          </p>

          <p className="text-lg sm:text-2xl font-light text-blue-800 mb-4 sm:mb-6 italic">
            Get yours today and stay protected.
          </p>

          {/* Clickable phone numbers with improved styling */}
          <div className="mb-3 sm:mb-4">
            <p className="text-lg sm:text-2xl font-semibold text-blue-700 mb-2">
              Reach us at the following numbers
            </p>
            <div className="flex flex-col space-y-2">
              <a
                href="tel:+251937389909"
                className="text-base sm:text-xl bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition font-medium tracking-wide"
              >
                0937389909
              </a>
              <a
                href="tel:+251944880841"
                className="text-base sm:text-xl bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition font-medium tracking-wide"
              >
                0944880841
              </a>
              <a
                href="tel:+251944880840"
                className="text-base sm:text-xl bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition font-medium tracking-wide"
              >
                0944880840
              </a>
            </div>
          </div>

          {/* Email with better styling */}
          <div className="mb-3 sm:mb-4">
            <p className="text-lg sm:text-2xl font-semibold text-blue-700 mb-2 ">
              Email:
            </p>
            <a
              href="mailto:minlitazezt@gmail.com"
              className="text-base sm:text-xl bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition font-medium tracking-wide"
            >
              minlitazezt@gmail.com
            </a>
          </div>

          <p className="text-lg sm:text-2xl font-semibold text-blue-700">
            Post: P.O. Box 20895
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mask;
