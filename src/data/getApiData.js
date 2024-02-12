import axios from 'axios';
import { getToken } from '../utils/auth';

const devMode = true;

export const getAllBoxes = async () => {
    const url = devMode ? "http://localhost:3000/api/boxes/all" : "https://lootboxbn.onrender.com/api/boxes/all"
    try {
        const response = await axios.get(url)
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        return error;
    }
};

export const sendUserDataToServer = async (dataToSend, Route) => {
    const url = devMode ? `http://localhost:3000/api/user/${Route}` : `https://lootboxbn.onrender.com/api/user/${Route}`
    try {
        const response = await axios.post(url, dataToSend, {
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
    const url = devMode ? `http://localhost:3000/api/user/user-data` : `https://lootboxbn.onrender.com/api/user/user-data`
    const token = getToken()
    let data = { isValid: false, response: {} }
    if (!data) {
        try {
            const response = await axios.post(url, null, {
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
