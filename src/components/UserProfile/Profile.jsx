import style from "./ProfileStyle.module.css";
import React from "react";
import avatar from "../../assets/img/avatars/avatar.svg"
import { logout } from "../../utils/auth";
import CardCurrency from "./currency/currencyCards";

const Profile = ({ userProfile }) => {
    const { username, wallet } = userProfile
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
                    <div className={`${style.btn}`}>Deposit</div>
                    <div className={`${style.btn}`}>Address</div>
                    <div className={`${style.btn}`}>Storage</div>
                    <div className={`${style.btn}`}>User Info</div>
                    <div className={`${style.btn}`} onClick={logout}>Logout</div>
                </div>
            </div>
            <div className={style['profile-view']}>
            </div>

        </div>
    )
}

export default Profile