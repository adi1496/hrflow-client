// import AppMsg from "../components/app-messages/app-msg.jsx";

const URL = 'http://127.0.0.1:5000';

const makeRequest = async (path, optionsObj) => {
    // const response = await fetch(`${URL}${path}`, optionsObj);
    const res = await fetch(`${URL}${path}`, optionsObj).then(async response => {
        const result = await response.json();
        if(result.status === 'fail' || result.status === 'error') {
            window.setAppMessage({
                error: true,
                message: result.message
            });

            return null;
        }
        // console.log(result);
        return result;
    }).catch(err => {
        console.log(err);
        if(err.toString() === 'TypeError: Failed to fetch') {
            console.log('cannot fetch');
            window.setAppMessage({
                error: true,
                message: 'Server not responding...'
            })
        }
    });

    console.log(res);
    // console.log(response);
    // if(response.status === 401) {
    //     console.log('received 401');
    //     window.setUser(null);
    //     localStorage.removeItem('jwt');
    // }

    return res;
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