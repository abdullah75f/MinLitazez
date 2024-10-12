import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import UseTheme, { accentColors, darkTheme, lightTheme, ThemeContextType } from "../ThemeProvider";
import logo from "../assets/icons/logo.jpg";






// type NavComponentType = {
//     to: string;
//     icon: IconType;
//     text: string;
// }

// const NavComponent: React.FC<NavComponentType> = (prop) => {
//     return (
//         <li className="px-1 rounded-md hover:bg-main-8">
//             <NavLink to={prop.to}>
//                 <prop.icon className="inline" />
//                 <span className="hidden pl-1 md:inline">{prop.text}</span>
//             </NavLink>
//         </li>
//     )
// }

const Navbar = () => {
    const theme = UseTheme() as ThemeContextType;
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    return (
        <header className="flex items-center justify-between">

            <div className="flex h-8 gap-2 items-center">
                <img src={logo} alt="Logo" className="rounded h-8" />
                <h1 className="hidden text-3xl font-bold md:block">MinLitazez Trading</h1>
            </div>
            <div className="flex">
                {/* <div
                    className={`mx-auto my-auto text-2xl border-2 border-transparent rounded-full bg-accent`}
                    onClick={() => setIsDropdownVisible(!isDropdownVisible)}
                    style={{ width: '50px', height: '50px', cursor: 'pointer' }}
                >
                </div>
                {isDropdownVisible && (
                    <div className="absolute mt-2 bg-white border border-gray-300 rounded shadow-lg">
                        {accentColors.map((color) => (
                            <div
                                key={color}
                                className={`p-2 cursor-pointer hover:bg-${color}`}
                                onClick={() => theme.changeAccentColor(color)}
                            >
                                {color}
                            </div>
                        ))}
                    </div>
                )} */}
                <div className="mx-auto my-auto text-2xl border-2 border-transparent rounded-full hover:bg-main-8">
                    {
                        theme.currentThemeColor === darkTheme
                            ? <MdDarkMode onClick={() => theme.changeThemeColor(lightTheme)} />
                            : <MdLightMode onClick={() => theme.changeThemeColor(darkTheme)} />
                    }
                </div>
            </div>

        </header>
    )
}

export default Navbar


//TODO: Accent Color
{/* <select id="theme-selector"
                    className="text-3xl"
                    value={theme.currentAccentColor}
                    onChange={(e) => { theme.changeAccentColor(e.target.value) }}>
                    {
                        accentColors.map((color) => {
                            return (
                                <option value={color} className={`${color} bg-accent`}>
                                    <FaCircle className="p-1 rounded-full" />
                                </option>
                            )
                        })
                    }
                </select> */}