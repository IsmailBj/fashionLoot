import axios from 'axios';
import { getToken, setToken, reload } from '../utils/auth';

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


export const depositPoints = async amount => {
    const token = getToken();
    const devMode = true;
    const apiUrl = devMode ? `http://localhost:3000/api/user/buy-coints` : `https://lootboxbn.onrender.com/api/user/buy-coints`;
    const headers = {
        'Authorization': `Bearer ${token}`
    };

    try {
        const response = await axios.post(apiUrl, { amount }, { headers })

        if (response.data.status === 'completed') {
            reload()
        } else {
            console.log('error transaction')
        }
    } catch (error) {
        throw error
    }
};


export const getUserAddress = async () => {
    const token = getToken();
    const apiUrl = devMode ? `http://localhost:3000/api/user/user-address` : `https://lootboxbn.onrender.com/api/user/user-address`;
    const headers = {
        'Authorization': `Bearer ${token}`
    };

    try {
        const response = await axios.get(apiUrl, { headers })
        return response.data
    } catch (error) {
        return error
    }
}

export const setNewAddress = async (data) => {
    const url = devMode ? `http://localhost:3000/api/user/add-address` : `https://lootboxbn.onrender.com/api/user/add-address`
    const token = getToken();
    const headers = {
        'Authorization': `Bearer ${token}`,
    };

    try {
        const response = await axios.post(url, data, { headers });

        if (!response.data.success) {
            throw new Error('Error sending data to the server');
        }

    } catch (error) {
        return { success: false, message: error.message };
    }
}