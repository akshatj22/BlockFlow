import React from "react";
import style from "./darkbody.module.css"
import logodark from "./assets/Big-logo.svg";
import logolight from "./assets/Big-logo-light.svg";
import { useTheme } from "../../ThemeContext";
function DarkBody() {
    const { theme } = useTheme();
    const logoChanger = theme === "dark" ? logodark : logolight;
    const buttonClass = theme === "dark" ? style.darkButton : style.lightButton;
    const h1Class = theme === "dark" ? style.darkh1 : style.lighth1;
    const h3Class = theme === "dark" ? style.darkh3 : style.lighth3;

    const handleButtonClick = () => {
        console.log("Hello")
    }
    return (
        <div className={style.container}>
            <div className={style.text}>

                <div className={style.heading}>
                    <h1 className={h1Class}>ELEVATE YOUR DAPP DEVELOPMENT WITH BLOCKFLOW</h1>

                </div>
                <div className={style.subheading}>
                    <h3 className={h3Class}>Efficient API Creation for your Blockchain Data Needs</h3>
                </div>
                <button className={`${style.btn} ${buttonClass}`} onClick={handleButtonClick}>Request Demo</button>
            </div>

            <div className={style.image}>
                <img src={logoChanger} alt="Logo" />
            </div>
        </div>
    );
}

export default DarkBody;