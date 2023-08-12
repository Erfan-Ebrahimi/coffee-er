import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import DarkSide from "../../Hooks/DarkSide";

// eslint-disable-next-line react/prop-types
export default function Switcher({ cSun, cMoon, content, size }) {
    const [colorTheme, setTheme] = DarkSide();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "dark" ? true : false
    );

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };

    return (
        <>
            <div className="flex items-center gap-x-2 " onClick={() => {
                setTheme(colorTheme)
                setDarkSide(!darkSide)
            }}  >
                <DarkModeSwitch
                    checked={darkSide}
                    onChange={toggleDarkMode}
                    moonColor={cMoon}
                    sunColor={cSun}
                    size={size}
                />
                {
                    content ? <span className="text-orange-400">{content}</span> : ''
                }

            </div>

        </>
    );
}