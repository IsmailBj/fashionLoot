import style from "./ProfileStyle.module.css";
import React, { useState } from "react";
import avatar from "../../assets/img/avatars/avatar.svg"
import { logout } from "../../utils/auth";
import CardCurrency from "./currency/currencyCards";
import UserAddress from "./address/address";

const Profile = ({ userProfile, openDeposit }) => {
    const { username, wallet } = userProfile;

    const [currentView, setCurrentView] = useState(null);

    const switchView = (target) => {
        setCurrentView(target === currentView ? null : target);
    };

    return (
        <div className={style['Profile-component']}>
            <div className={style['menu-section']}>
                <div className={style["avatar-profile"]}>
                    <img className={style['avatar-img']} src={avatar} alt="no avatar" />
                    <div className={style.name}>{username}</div>
                </div>
                <div className="user-currency">
                    <CardCurrency wallet={wallet} />
                </div>
                <div className={style.menu}>
                    <div className={`${style.btn}`} onClick={openDeposit}>Deposit</div>
                    <div className={`${style.btn}`} onClick={() => switchView('address')}>Address</div>
                    <div className={`${style.btn}`}>Storage</div>
                    <div className={`${style.btn}`}>User Info</div>
                    <div className={`${style.btn}`} onClick={logout}>Logout</div>
                </div>
            </div>
            <div className={style['profile-view']}>
                {currentView === "address" && <UserAddress />}
            </div>
        </div>
    );
};

export default Profile;
