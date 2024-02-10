import axios from 'axios';
import { getToken } from '../utils/auth';
export const getAllBoxes = async () => {
    console.log(process.env.NODE_ENV)
    try {
        const response = await axios.get("https://lootboxbn.onrender.com/api/boxes/all");
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        return error;
    }
};

export const sendUserDataToServer = async (dataToSend, Route) => {
    try {
        const response = await axios.post(`https://lootboxbn.onrender.com/api/user/${Route}`, dataToSend, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.data.success) {
            throw new Error('Error sending data to the server');
        }

        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        return { success: false, message: error.message };
    }
};

export const getUserData = async () => {
    const token = getToken()
    let data = { isValid: false, response: {} }
    if (!data) {
        try {
            const response = await axios.post('https://lootboxbn.onrender.com/api/user/user-data', null, {
                headers: {
                    'authorization': `Bearer ${token}`
                }
            })
            data.isValid = true
            data.response = { ...response.data.user }
            return response;
        } catch (error) {
            console.log(error)
        }
    } else {
        console.log("call saved")
        return data.response
    }
    console.log(data)
}
