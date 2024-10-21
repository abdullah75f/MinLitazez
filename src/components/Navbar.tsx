import { MdDarkMode, MdLightMode } from "react-icons/md";
import UseTheme, {
  darkTheme,
  lightTheme,
  ThemeContextType,
} from "../ThemeProvider";
import logo from "../assets/icons/logo.jpg";
import { FaPhone } from "react-icons/fa";

const Navbar = () => {
  const theme = UseTheme() as ThemeContextType;

  return (
    <header className="flex items-center justify-between px-8 py-4">
      {/* Logo and Title */}
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo" className="h-12 rounded-full shadow-md" />
        <h1
          className="text-3xl font-extrabold text-gray-900"
          style={{ fontFamily: "Lobster, cursive" }}
        >
          MinLitazez Trading
        </h1>
      </div>

      {/* Contact Us Section */}
      <div className="flex items-center gap-8">
        {/* Contact Us at */}
        <div className="text-lg font-semibold text-gray-900">
          <span style={{ fontFamily: "Lobster, cursive" }}>Contact Us at</span>
        </div>

        {/* Phone Numbers */}
        <div className="flex items-center space-x-6">
          {/* Phone Number 1 */}
          <div className="flex items-center space-x-2">
            <FaPhone className="text-xl text-gray-700" />
            <a
              href="tel:+251937389909"
              className="text-lg font-semibold text-gray-700 hover:text-green-500"
              style={{ fontFamily: "Lobster, cursive" }}
            >
              +251 937 389 909
            </a>
          </div>
          {/* Phone Number 2 */}
          <div className="flex items-center space-x-2">
            <FaPhone className="text-xl text-gray-700" />
            <a
              href="tel:+251717443050"
              className="text-lg font-semibold text-gray-700 hover:text-green-500"
              style={{ fontFamily: "Lobster, cursive" }}
            >
              +251 717 443 050
            </a>
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="mx-auto my-auto text-2xl border-2 border-transparent rounded-full hover:bg-main-8">
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
