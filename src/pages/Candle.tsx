import CandleBlue from "../assets/images/candleBlue.jpeg";

const Candle = () => {
  return (
    <div
      className="relative py-10 min-h-screen flex items-center justify-center bg-fixed"
      style={{
        backgroundImage: `url(${CandleBlue})`,
        backgroundPosition: "center 20%", // Moves background image downward

        backgroundSize: "80%", // Zoomed-out effect
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content container */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
        <h1 className="mb-8 text-5xl font-extrabold">MinLitazez Candle</h1>

        <div className="p-6 bg-blue-100 bg-opacity-90 rounded-lg shadow-lg">
          <img
            src={CandleBlue}
            alt="MinLitazez Candle"
            className="w-full h-auto rounded-md mb-4"
          />
          <p className="text-4xl font-semibold text-blue-800 mb-2">
            MinLitazez Candle
          </p>
          <p className=" text-3xl text-blue-700">
            Order at: +251 937 389 909 or +251 717 443 050
          </p>
        </div>
      </div>
    </div>
  );
};

export default Candle;
