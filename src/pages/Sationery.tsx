import ListOfStationeryTools from "../data/stationary.data";
import stationary from "../assets/images/stationary.jpg";

const Stationery = () => {
  return (
    <div
      className="py-10 mx-auto max-w-7xl w-full"
      style={{
        backgroundImage: `url(${stationary})`,
        backgroundSize: "auto",
        backgroundPosition: "top left",
        backgroundRepeat: "repeat",
        minHeight: "100vh",
      }}
    >
      <h1 className="mb-8 text-4xl font-bold text-center text-gray-800">
        Stationery Materials
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {ListOfStationeryTools.map((product, index) => (
          <div
            key={index}
            className="p-6 transition duration-300 ease-in-out transform bg-blue-100 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-2"
          >
            <p className="text-lg font-medium text-gray-700">
              {product.ProductName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stationery;
