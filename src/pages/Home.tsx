import { useNavigate } from 'react-router-dom';
import videoes from '../assets/videoes';
import ServicesList from "../data/service.data";

const Home = () => {
    return (
        <div>
            <h2 className="mb-5 text-5xl font-bold text-center text-accent">Coming Soon!!!</h2>

            <div>
                <h3 className="text-3xl font-bold text-center">Services We give</h3>
                <ul className="grid items-center justify-center max-w-screen-lg grid-cols-1 gap-4 gap-5 mx-auto my-3 sm:grid-cols-2 lg:grid-cols-3">
                    {ServicesList.map((service, index) => (
                        <li key={index}>
                            <ServiceCard title={service.Title} picture={service.Picture} isStarted={service.IsStarted} />
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col items-center my-10 h-96">
                <p>About MinLitazez</p>
                <video className="h-full rounded-lg" src={videoes.Minlitazez} controls></video>
            </div>
            <div className='flex items-center justify-center gap-5'>
                <div className="flex flex-col items-center my-10 h-96">
                    <p>About MinLitazez</p>
                    <video className="h-full rounded-lg" src={videoes.Phone} controls></video>
                </div>
                <div className="flex flex-col items-center my-10 h-96">
                    <p>About MinLitazez</p>
                    <video className="h-full rounded-lg" src={videoes.RainCoat} controls></video>
                </div>
            </div>
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
        <div className="flex flex-col items-center justify-center rounded-lg pointer" onClick={handleCardClick}>
            <div className="relative overflow-hidden rounded-md group">
                <img
                    src={picture}
                    alt={title}
                    className="object-contain w-full h-full transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                />
            </div>
            <div className='flex items-center justify-between w-full text-sm'>
                <p className="text-sm font-semibold text-accent">{title}</p>
                <p>{isStarted ? "Checkout" : "Coming Soon"}</p>
            </div>

        </div>
    );
};


