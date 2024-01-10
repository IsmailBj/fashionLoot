export const getAllBoxes = async () => {
    const data = await (await fetch("http://localhost:3000/api/boxes/all")).json();
    return data;
};

export const sendUserDataToServer = async (dataToSend, Route) => {
    console.log(dataToSend, Route)
    try {
        const response = await fetch(`http://localhost:3000/api/user/${Route}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend),
        });
        const responseData = await response.json();

        if (!response.ok) {
            console.log('responseData fail', responseData)
            throw new Error('Error sending data to the server');
        }
        console.log('responseData', responseData)
        return responseData
    } catch (error) {
        console.error('Error:', error.message);
        return error
    }
};