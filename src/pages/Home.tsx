import { useNavigate } from 'react-router-dom';
import ServicesList from "../data/service.data";




const Home = () => {

    return (
        <div>
            <h2 className="text-center text-3xl font-bold">Coming Soon</h2>
            <h2 className="text-center text-3xl font-bold">Services We give</h2>
            <ul className="my-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center">
                {ServicesList.map((service, index) => (
                    <li key={index}>
                        <ServiceCard title={service.Title} picture={service.Picture} isStarted={service.IsStarted} />
                    </li>
                ))}
            </ul>

        </div>
    );
}


export default Home




type ServiceCardProp = {
    title: string;
    picture: string;
    isStarted: boolean;
    route?: string;
}

const ServiceCard: React.FC<ServiceCardProp> = ({ title, picture, isStarted, route }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        if (isStarted) navigate(route as string);
    };

    return (
        <div className="flex pointer flex-col items-center justify-center bg-white shadow-md rounded-lg" onClick={handleCardClick}>
            <div className="h- max-w-xs overflow-hidden rounded-md relative group">
                <img
                    src={picture}
                    alt={title}
                    className="w-full h-full object-contain transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                />
            </div>
            <h3 className="text-lg font-semibold mt-4 mb-2 text-center">{title}</h3>
            <p className="text-gray-500 text-center">{isStarted ? "Checkout" : "Coming Soon"}</p>
        </div>
    );
};

