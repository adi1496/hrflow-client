const URL = '127.0.0.1:5000';

export const fetchPOST = async (path, data) => {
    // console.log(JSON.stringify(data));
    const response = await fetch(`http://${URL}${path}`, {
        method: 'POST',
        mode: 'cors',
        // credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const responseJSON = await response.json();

    return responseJSON;
}