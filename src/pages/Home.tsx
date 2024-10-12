import { useNavigate } from 'react-router-dom';
import videoes from '../assets/videoes';
import PartnerList from '../data/partner.data';
import ServicesList from "../data/service.data";

const Home = () => {
    return (
        <div>
            <h2 className="mb-5 text-5xl font-bold text-center text-accent">Coming Soon!!!</h2>

            <div>
                <h3 className="text-3xl font-bold text-center">Services We give</h3>
                <ul className="grid items-center justify-center grid-cols-1 gap-4 gap-5 mx-auto my-3 sm:grid-cols-2 lg:grid-cols-3">
                    {ServicesList.map((service, index) => (
                        <li key={index}>
                            <ServiceCard title={service.Title} picture={service.Picture} isStarted={service.IsStarted} route={service.Route} />
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col items-center my-10 h-96">
                <p>About MinLitazez</p>
                <video className="h-full rounded-lg" src={videoes.Minlitazez} controls></video>
            </div>

            <div>
                <p className='text-center'>Our Product Review</p>
                <div className='flex items-center justify-center gap-5'>
                    <div className="flex flex-col items-center my-10 h-96">
                        <video className="h-full rounded-lg" src={videoes.Phone} controls></video>
                    </div>
                    <div className="flex flex-col items-center my-10 h-96">
                        <video className="h-full rounded-lg" src={videoes.RainCoat} controls></video>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-lg p-6 mx-auto bg-white rounded-lg shadow-lg">
                <h3 className="mb-6 text-2xl font-bold text-center text-gray-800">Our Partners</h3>
                <ul className="grid grid-cols-2 gap-4">
                    {PartnerList.map((partner, index) => (
                        <li
                            key={index}
                            className="flex items-center p-2 space-x-4 transition duration-300 rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100"
                        >
                            {partner.Picture ? (
                                <img
                                    src={partner.Picture}
                                    alt={partner.Name}
                                    className="object-contain w-12 h-12 border border-gray-300 rounded-full"
                                />
                            ) : (
                                <div className="w-12 h-12 bg-gray-200 border border-gray-300 rounded-full" />
                            )}
                            <p className="text-lg font-medium text-gray-700">{partner.Name}</p>
                        </li>
                    ))}
                </ul>
            </div>


        </div >
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
        if (route) {
            navigate(route);
            return;
        }
    };

    return (
        <div
            className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md cursor-pointer pointer"
            onClick={handleCardClick}
        >
            <div className="relative h-48 max-w-xs overflow-hidden rounded-md group">
                <img
                    src={picture}
                    alt={title}
                    className="object-contain w-full h-full transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                />
            </div>
            <h3 className="mt-4 mb-2 text-lg font-semibold text-center">{title}</h3>
            <p className="text-center text-gray-500">{isStarted ? "Checkout" : "Coming Soon"}</p>
        </div>
    );
};
