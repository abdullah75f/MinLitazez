import candleImage from "../assets/images/candle.jpeg";

const Candle = () => {
  return (
    <div
    //   className="py-10 mx-auto max-w-7xl w-full"
    //   style={{
    //     backgroundImage: `url(${candleImage})`,
    //     backgroundSize: "auto",
    //     backgroundPosition: "top left",
    //     backgroundRepeat: "repeat",
    //     minHeight: "100vh",
    //   }}
    >
      <h1 className="mb-8 text-4xl font-bold text-center text-gray-800">
        MinLitazez Candle
      </h1>
      <div className="flex justify-center">
        <div className="p-6 bg-yellow-100 rounded-lg shadow-md">
          <img
            src={candleImage}
            alt="MinLitazez Candle"
            className="w-full h-auto rounded-md mb-4"
          />
          <p className="text-lg font-medium text-gray-700 text-center">
            MinLitazez Candle
          </p>
          <p>Order at:+251 937 389 909 or +251 717 443 050</p>
        </div>
      </div>
    </div>
  );
};

export default Candle;
