import React, { useState } from "react";
import style from "./night.module.css"
import Navbar from "../../Components/navbar/Navbar";
import DarkBody from "../../Components/BodyD/darkBody";
import { useTheme } from "../../ThemeContext";
function Night() {
    const { theme } = useTheme();
    const [fade, setFade] = useState(true)
    const containerClass = theme === "dark" ? style["dark-container"] : style["light-container"];
    return (
        <div className={`${style.container} ${containerClass}`}>
            <Navbar />
            <DarkBody />
            <div className={style.parent} style={{
                overflow: "hidden"
            }}>
                <div className={fade && theme === 'dark' ? style.invisibleCircleLightToDark : fade && theme === 'light' ? style.invisibleCircleDarkToLight : style.invisibleCircle} ></div>
            </div>
        </div>
    )
}

export default Night;