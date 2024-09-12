import React from "react";
import ProfilePic from "../components/ProfilePic.jsx"
import Bio from "../components/Bio.jsx"
import Buttons from "../components/Buttons.jsx" 
import Main from "../components/Main.jsx"
import Footer from "./Footer.jsx"

export default function Card() {
    return (
        <div className="card">
            <ProfilePic />
            <Bio />
            <Buttons />
            <Main />
            <Footer />
        </div>
    )
}