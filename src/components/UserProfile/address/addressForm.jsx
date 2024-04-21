import React, { useState } from "react";
import style from './addressStyle.module.css'
import { setNewAddress } from "../../../data/getApiData";

const AddressForm = ({ setEdit }) => {
    const [formData, setFormData] = useState({
        country: '',
        city: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        street: '',
        streetNr: '',
        postCode: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const submitAddress = async () => {
        for (const key in formData) {
            if (!formData[key]) {
                alert('Please fill in all fields');
                return;
            }
        }

        try {
            await setNewAddress(formData);
        } catch (error) {
            console.error('Error setting new address:', error);
        }
    };

    return (
        <div className={style["form-container"]}>
            <div className={style["form-section"]}>
                <div className={style["country-section"]}>
                    <label className={style["country-title"]}>Country/Region</label>
                    <select name="country" value={formData.country} onChange={handleChange}>
                        <option value="NMK" selected>North Macedonia</option>
                        <option value="AL">Albania</option>
                        <option value="RKS">Kosovo</option>
                    </select>
                </div>
            </div>
            <div className={style["form-section"]}>
                <div className={style["contact-section"]}>
                    <label className={style["contact-title"]}>Contact information</label>
                    <div className={style["input-section"]}>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className={style.input} placeholder="First Name" />
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className={style.input} placeholder="Last Name" />
                        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className={style.input} placeholder="Phone Number" />
                    </div>
                </div>
            </div>
            <div className={style["form-section"]}>
                <div className={style["address-section"]}>
                    <label className={style["address-title"]}>Address information</label>
                    <div className={style["input-section"]}>
                        <input type="text" name="city" value={formData.city} onChange={handleChange} className={style["address-input"]} placeholder="city" />
                        <input type="text" name="street" value={formData.street} onChange={handleChange} className={style["address-input"]} placeholder="street" />
                        <input type="text" name="streetNr" value={formData.streetNr} onChange={handleChange} className={style["address-input"]} placeholder="street Number" />
                        <input type="text" name="postCode" value={formData.postCode} onChange={handleChange} className={style.input} placeholder="Post Code" />
                    </div>
                </div>
            </div>
            <div className="btn-section">
                <input type="button" value="Confirm" onClick={submitAddress} />
                <input type="button" value="Cancel" onClick={() => setEdit(false)} />
            </div>
        </div>
    )
}

export default AddressForm;
