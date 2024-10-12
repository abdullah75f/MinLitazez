import { useNavigate } from 'react-router-dom';
import { FaInstagram,FaTelegram,FaTiktok,FaFacebook, FaYoutube } from 'react-icons/fa';
import videoes from '../assets/videoes';
import PartnerList from '../data/partner.data';
import ServicesList from "../data/service.data";


const Home = () => {
    return (
        <div>
            <h2 className="mb-5 text-5xl font-bold text-center text-accent">Coming Soon!!!</h2>
            <h2 className="mb-5 text-5xl font-bold text-center text-red"> Serving you with pleasure</h2>

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

        <div className="flex justify-center mt-10 space-x-6">
            <a href="https://www.instagram.com/minlitazezaddis2020/" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110" onClick={(e) => {
                 e.preventDefault();
                window.location.href = "instagram://user?username=minlitazezaddis2020";
                setTimeout(() => {
                    window.location.href = "https://www.instagram.com/minlitazezaddis2020/";
                    }, 30000);
            }}>
                <FaInstagram className="text-4xl text-gray-700 hover:text-red-600" />
            </a>
            <a href="https://t.me/MinLetazezAddis" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110" onClick={(e) => {
                 e.preventDefault();
                window.location.href = "tg://resolve?domain=MinLetazezAddis";
             setTimeout(() => {
                window.location.href = "https://t.me/MinLetazezAddis";
                    }, 30000);
            }}>
                <FaTelegram className="text-4xl text-gray-700 hover:text-blue-500" />
            </a>
            <a href="https://www.tiktok.com/@minletazez?lang=en" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110" onClick={(e) => {
                e.preventDefault();
                window.location.href = "snssdk1128://user/profile/686441123456789";
                setTimeout(() => {
                    window.location.href = "https://www.tiktok.com/@minletazez?lang=en";
                    }, 30000);
                }}>
                <FaTiktok className="text-4xl text-gray-700 hover:text-black" />
            </a>
            <a href="https://web.facebook.com/MinLetazez2020" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110" onClick={(e) => {
                e.preventDefault();
                window.location.href = "fb://page/MinLetazez2020";
                setTimeout(() => {
                     window.location.href = "https://web.facebook.com/MinLetazez2020";
                    }, 30000);
                }}>
                <FaFacebook className="text-4xl text-gray-700 hover:text-blue-700" />
            </a>
            <a href="https://www.youtube.com/@MinLitazezTrading" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110" onClick={(e) => {
                e.preventDefault();
                window.location.href = "vnd.youtube://www.youtube.com/channel/UC1234567890";
                setTimeout(() => {
                    window.location.href = "https://www.youtube.com/@MinLitazezTrading";
                    }, 30000);
                }}>
                 <FaYoutube className="text-4xl text-gray-700 hover:text-red-700" />
            </a>
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
