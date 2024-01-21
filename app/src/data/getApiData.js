import axios from 'axios';

export const getAllBoxes = async () => {
    try {
        const response = await axios.get("http://localhost:3000/api/boxes/all");
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        return error;
    }
};

export const sendUserDataToServer = async (dataToSend, Route) => {
    try {
        const response = await axios.post(`http://localhost:3000/api/user/${Route}`, dataToSend, {
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
