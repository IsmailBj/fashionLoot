import axios from 'axios';
import { getToken, setToken } from '../utils/auth';

const devMode = true;

export const getAllBoxes = async () => {
    const url = devMode ? "http://localhost:3000/api/boxes/all" : "https://lootboxbn.onrender.com/api/boxes/all"
    const localData = localStorage.getItem('boxes')
    if (!localData) {
        try {
            const response = await axios.get(url)
            const responseData = response.data
            localStorage.setItem('boxes', JSON.stringify(responseData))
            return responseData;
        } catch (error) {
            console.error('Error:', error.message);
            return error;
        }
    } else {
        return JSON.parse(localData)
    }
};

export const requestRegisterUser = async (dataToSend) => {
    const url = devMode ? `http://localhost:3000/api/user/register` : `https://lootboxbn.onrender.com/api/user/register`

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
        return { success: false, message: error.message };
    }
}

export const requestLoginUser = async (dataToSend) => {
    const url = devMode ? `http://localhost:3000/api/user/login` : `https://lootboxbn.onrender.com/api/user/login`
    const token = getToken()
    if (token) {
        // https://chat.openai.com/c/0bff9071-6e6a-4129-b36a-cd686d37de59
    }
    try {
        const response = await axios.post(url, dataToSend, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = response.data

        if (!data.success) {
            throw new Error('Wrong Email or Password');
        }
        setToken(data.token)
        return data;
    } catch (error) {
        console.error('Error:', error.message);
        return { success: false, message: error.message };
    }
};

export const getUserData = async () => {
    const token = getToken()
    let data = {};
    const url = devMode ? `http://localhost:3000/api/user/user-data` : `https://lootboxbn.onrender.com/api/user/user-data`
    const headers = {
        'Authorization': `Bearer ${token}`
    };

    try {
        const response = await axios.get(url, { headers });
        data = response.data.user
    } catch (error) {
        console.log(error)
    }
    return data
}


// const response = await axios.post(url, null, {
//     headers: {
//         'authorization': `Bearer ${token}`
//     }
// })
