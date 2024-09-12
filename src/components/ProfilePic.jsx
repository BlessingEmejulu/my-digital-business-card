import React from "react";
import profileImage from "../assets/my-pic.jpeg";

export default function ProfilePic() {
    return (
        <img src={profileImage} alt="Picture of Blessing Emejulu wearing pink" className="profile-pic" />
    );
}