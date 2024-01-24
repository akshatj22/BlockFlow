import React, {useState,useEffect} from "react";
import { useTheme } from "../../ThemeContext";
import image from "./assets/dark-logo.svg"
import { Link } from "react-router-dom";
import lightStyle from "./NavbarLight.module.css";
import darkStyle from "./NavbarDark.module.css";
import sun from "./assets/Vector.svg"
import moon from "./assets/moon.svg"
import lightimage from "./assets/light-logo.svg"
function Navbar() {
    const { theme, delayThemeChange } = useTheme();
    // console.log(theme);
    // const [isMobileView, setMobileView] = useState(false);
    const style = theme === "dark" ? darkStyle : lightStyle;
    const logoImageSrc = theme === "dark" ? image : lightimage;
    const themeChanger = theme === "dark" ? sun : moon;
    const textClass = theme === "dark" ? style.darktext : style.lighttext;



    return (

        <nav className={style.navbar}>
            <div className={style.nvbarleft} >
                <img src={logoImageSrc} alt="Logo" />
            </div>
            <div className={`${style.navbarright} $`}>
                {/* <ul>
                    <li >
                    <Link className={textClass}>DOCS</Link>
                    </li>
                    <li >
                    <Link className={textClass}>BLOGS</Link>
                    </li>
                    <li >
                    <Link className={textClass}>PRICING</Link>
                    </li>
                    <li >
                    <Link className={textClass}>CONTACT US</Link>
                    </li>
                </ul> */}
                <a href="/" className={textClass}>DOCS</a>
                <a href="/" className={textClass}>BLOGS</a>
                <a href="/" className={textClass}>PRICING</a>
                <a href="/" className={textClass}>CONTACT US</a>
                <img  style ={{zIndex:1}}src={themeChanger} onClick={() => delayThemeChange() } />
            </div>
        </nav>

        
        );
    }
    
    
    export default Navbar;
  