const URL = 'http://127.0.0.1:5000';

const makeRequest = async (path, optionsObj) => {
    const response = await fetch(`${URL}${path}`, optionsObj);
    if(response.status === 401) {
        console.log('received 401');
        window.setUser(null);
        localStorage.removeItem('jwt');
    }

    return await response.json();
}

const setAuth = (jwt) => {
    return `Bearer ${jwt}`;
}




export const fetchPOST = async (path, data, auth) => {
    const optionsObj = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    if(auth) optionsObj.headers.authorization = setAuth(auth);

    const json = await makeRequest(path, optionsObj);

    return json;
}

export const fetchGET = async(path, auth) => {
    const optionsObj = {
        method: 'GET',
        mode: 'cors',
        headers: {}
    }

    if(auth) optionsObj.headers.authorization = setAuth(auth);

    const json = await makeRequest(path, optionsObj);

    return json;
}