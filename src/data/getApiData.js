import axios from 'axios';
import { getToken, setToken, reload } from '../utils/auth';

const domainTarget = "http://localhost:3000"

const buildApiUrl = (endpoint) => `${domainTarget}${endpoint}`;

const handleApiResponse = async (promise) => {
    try {
        const response = await promise;

        if (response.data && response.data.error) {
            throw new Error(response.data.error || 'Unknown error occurred');
        }

        return response.data

    } catch (error) {
        console.error(error);
        return { success: false, message: error.message, statusCode: 400 };
    }
};


export const getAllBoxes = async () => {
    const url = buildApiUrl("/api/boxes/all");
    return handleApiResponse(axios.get(url));
};

export const requestRegisterUser = async (dataToSend) => {
    const url = buildApiUrl("/api/user/register");
    return handleApiResponse(axios.post(url, dataToSend, {
        headers: { 'Content-Type': 'application/json' }
    }));
}

export const requestLoginUser = async (dataToSend) => {
    const url = buildApiUrl('/api/user/login');
    const response = await handleApiResponse(axios.post(url, dataToSend, {
        headers: { 'Content-Type': 'application/json' }
    }));

    if (!response.error) {
        setToken(response.token);
    }

    return response;
};

export const getUserData = async () => {
    const token = getToken();
    const url = buildApiUrl('/api/user/user-data');
    const headers = { 'Authorization': `Bearer ${token}` };
    const response = await handleApiResponse(axios.get(url, { headers }));
    return response.user || {};
}

export const depositPoints = async amount => {
    const token = getToken();
    const apiUrl = buildApiUrl('/api/user/buy-coints');
    const headers = { 'Authorization': `Bearer ${token}` };
    const response = await handleApiResponse(axios.post(apiUrl, { amount }, { headers }));

    if (response.status === 'completed') {
        reload();
    } else {
        console.log('Transaction failed');
    }
};

export const getUserAddress = async () => {
    const token = getToken();
    const apiUrl = buildApiUrl('/api/user/user-address');
    const headers = { 'Authorization': `Bearer ${token}` };
    return handleApiResponse(axios.get(apiUrl, { headers }));
}

export const setNewAddress = async (data) => {
    const url = buildApiUrl('/api/user/add-address');
    const token = getToken();
    const headers = { 'Authorization': `Bearer ${token}` };
    return handleApiResponse(axios.post(url, data, { headers }));
}