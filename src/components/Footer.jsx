import React from "react";
import twitterLogo from "../assets/icons/Twitter-Icon.png";
import facebookLogo from "../assets/icons/Facebook-Icon.png";
import intagramLogo from "../assets/icons/Instagram-Icon.png";
import githubLogo from "../assets/icons/Github-Icon.png";


export default function Footer() {
    return (
        <footer>
            <a href="https://x.com/BlessedTechie">
                <img src={twitterLogo} alt="Twitter Icon" />
            </a>
            <a href="https://web.facebook.com/blessing.emejulu.33/">
                <img src={facebookLogo} alt="Facebook Icon" />
            </a>
            <a href="https://www.instagram.com/blessingemejul">
                <img src={intagramLogo} alt="Instagram Icon" />
            </a>
            <a href="https://github.com/BlessingEmejulu">
                <img src={githubLogo} alt="Github Icon" />
            </a>

        </footer>
    );
}