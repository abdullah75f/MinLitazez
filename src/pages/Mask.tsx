import guyyaMin2 from "../assets/images/guyyaMin2.png";

const Mask = () => {
  return (
    <div className="relative py-16 min-h-screen flex items-center justify-center bg-fixed bg-gray-900">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-400 opacity-50"></div>

      {/* Content container */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
        <h1 className="mb-6 text-5xl font-extrabold tracking-wide text-blue-300">
          Guyya Medical Face Mask
        </h1>

        <div className="p-8 bg-blue-100 bg-opacity-95 rounded-2xl shadow-2xl">
          <img
            src={guyyaMin2}
            alt="Guyya Facemask"
            className="w-full h-auto rounded-lg mb-6 shadow-lg"
          />
          <p className="text-4xl font-semibold text-blue-900 mb-3">
            Order Your Guyya Facemask Now!
          </p>
          <p className="text-3xl font-semibold text-blue-900 mb-3">
            የእርስዎን የጉያ ጭምብል አሁን ይዘዙ!
          </p>

          <p className="text-2xl text-blue-800 mb-6">
            Get yours today and stay protected.
          </p>

          {/* Clickable phone numbers */}
          <p className="text-2xl font-bold text-blue-700">
            Call:{" "}
            <a href="tel:+251937389909" className="underline">
              +251 937 389 909
            </a>
            ,{" "}
            <a href="tel:+251944880841" className="underline">
              094 488 0841
            </a>
            ,{" "}
            <a href="tel:+251944880840" className="underline">
              094 488 0840
            </a>
          </p>

          <p className="text-2xl font-bold text-blue-700">
            Email:{" "}
            <a href="mailto:minlitazezt@gmail.com" className="underline">
              minlitazezt@gmail.com
            </a>
          </p>
          <p className="text-2xl font-bold text-blue-700">
            Post: P.O. Box 20895
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mask;
