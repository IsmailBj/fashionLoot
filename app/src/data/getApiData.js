export const getAllBoxes = async () => {
    const data = await (await fetch("http://localhost:3000/api/boxes/all")).json();
    return data;
};
