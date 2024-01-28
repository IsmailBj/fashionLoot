import React from "react";
import avatar from "../../assets/img/avatars/avatar.svg"
import { logout } from "../../utils/auth";

const Profile = () => {

    return (
        <div className="Profile-component">
            <div className="menu-section">
                <div className="avatar-profile">
                    <img src={avatar} alt="no avatar" />
                    <div className="name">Test UserName</div>
                </div>
                <div className="menu">
                    <div className="balance">Balance</div>
                    <div className="address">Address</div>
                    <div className="storage">Storage</div>
                    <div className="logout" onClick={logout}>Logout</div>
                </div>
            </div>
            <div className="profile-view">

            </div>

        </div>
    )
}

export default Profile