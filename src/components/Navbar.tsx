import { MdDarkMode, MdLightMode } from "react-icons/md";
import UseTheme, {
  darkTheme,
  lightTheme,
  ThemeContextType,
} from "../ThemeProvider";
import logo from "../assets/icons/logo.jpg";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const theme = UseTheme() as ThemeContextType;

  return (
    <header className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-4 lg:py-6">
      {/* Logo and Title */}
      <div className="flex items-center gap-4 mb-4 lg:mb-0">
        <Link to="/" className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Logo"
            className="h-14 lg:h-16 rounded-full shadow-md cursor-pointer"
          />
          <h1
            className="text-2xl lg:text-4xl font-extrabold text-gray-900"
            style={{ fontFamily: "Lobster, cursive" }}
          >
            MinLitazez Trading
          </h1>
        </Link>
      </div>

      {/* Contact Us Section */}
      <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10">
        {/* Contact Us Label */}
        <div className="text-lg lg:text-2xl font-semibold text-gray-900">
          <span style={{ fontFamily: "Lobster, cursive" }}>Contact Us at</span>
        </div>

        {/* Phone Numbers (Responsive Layout) */}
        <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-6 text-base lg:text-xl">
          <div className="flex items-center gap-2 lg:gap-3">
            <FaPhone className="text-lg lg:text-2xl text-gray-700" />
            <a
              href="tel:+251937389909"
              className="font-semibold text-gray-700 hover:text-green-500 whitespace-nowrap"
              style={{ fontFamily: "Lobster, cursive" }}
            >
              +251 937 389 909
            </a>
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="text-2xl lg:text-3xl border-2 border-transparent rounded-full hover:bg-main-8">
          {theme.currentThemeColor === darkTheme ? (
            <MdDarkMode onClick={() => theme.changeThemeColor(lightTheme)} />
          ) : (
            <MdLightMode onClick={() => theme.changeThemeColor(darkTheme)} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
