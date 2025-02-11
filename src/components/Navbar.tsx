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
    <header className="flex flex-row w-full items-center justify-between px-3 sm:px-4 md:px-8 py-3 sm:py-4">
      {/* Logo and Title */}
      <div className="flex items-center gap-3 sm:gap-4">
        <Link to="/" className="flex items-center space-x-3 sm:space-x-4">
          <img
            src={logo}
            alt="Logo"
            className="h-10 sm:h-12 rounded-full shadow-md cursor-pointer"
          />
          <h1
            className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900"
            style={{ fontFamily: "Lobster, cursive" }}
          >
            MinLitazez Trading
          </h1>
        </Link>
      </div>

      {/* Contact Us Section */}
      <div className="flex flex-row items-center gap-3 sm:gap-4 md:gap-8">
        {/* Contact Us at */}
        <div className="hidden sm:block text-sm sm:text-lg font-semibold text-gray-900">
          <span style={{ fontFamily: "Lobster, cursive" }}>Contact Us at</span>
        </div>

        {/* Phone Numbers */}
        <div className="flex flex-row items-center gap-3 sm:gap-4 md:gap-6">
          {/* Phone Number 1 */}
          <div className="flex items-center gap-1 sm:gap-2">
            <FaPhone className="text-lg sm:text-xl text-gray-700" />
            <a
              href="tel:+251937389909"
              className="text-sm sm:text-base md:text-lg font-semibold text-gray-700 hover:text-green-500"
              style={{ fontFamily: "Lobster, cursive" }}
            >
              +251 937 389 909
            </a>
          </div>
          {/* Phone Number 2 */}
          <div className="flex items-center gap-1 sm:gap-2">
            <FaPhone className="text-lg sm:text-xl text-gray-700" />
            <a
              href="tel:+251717443050"
              className="text-sm sm:text-base md:text-lg font-semibold text-gray-700 hover:text-green-500"
              style={{ fontFamily: "Lobster, cursive" }}
            >
              +251 717 443 050
            </a>
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="text-xl sm:text-2xl border-2 border-transparent rounded-full hover:bg-main-8">
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
