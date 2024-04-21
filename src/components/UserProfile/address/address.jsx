import React, { useState, useEffect } from "react";
import style from "../address/addressStyle.module.css";
import AddressForm from "./addressForm";
import { getUserAddress } from "../../../data/getApiData";

// TODO edit address and delete 

const UserAddress = () => {
    const [edit, setEdit] = useState(false);
    const [addressList, setAddressList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUserAddress();
                setAddressList(data);
            } catch (error) {
                console.error("Error fetching user addresses:", error);
            }
        };
        fetchData();
    }, []);

    return (
        !edit ? (
            <div className={style["table-container"]}>
                <div className={style.header}>
                    <div className={style.title}>Shipping address</div>
                    <button className={`${style.btn} ${style["add-address"]}`} onClick={() => setEdit(true)}>Add a new address</button>
                </div>
                {!addressList.success ? <span>{addressList.message}</span> :
                    addressList.addresses ? (
                        addressList.addresses.map(address => (
                            <div className={style["address-info"]} key={address._id}>
                                <div className={style["address-main"]}>
                                    <span className={style.icon}>:O</span>
                                    <span>{`${address.firstName} ${address.lastName} ${address.phoneNr}`}</span>
                                </div>
                                <div className={style["address-detail"]}>
                                    <span className={style["city-country"]}>{`${address.country} ${address.city}`}</span>
                                    <span className={style.street}>{address.street}</span>
                                    <span className={style["address-nr"]}>{address.streetNumber}</span>
                                </div>
                                <div className={style["edit-btn"]}>
                                    <span className={style.edit} onClick={() => setEdit(true)}>Edit</span>
                                    <span className={style.delete}>Remove</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <span>No addresses found</span>
                    )
                }
            </div>
        ) : <AddressForm setEdit={setEdit} />
    );
};

export default UserAddress;
