import store from "..";
import axios from 'axios';

export const post = (url, body) => {
    let accessToken = store.getState().login.accessToken;
    console.log(accessToken)
    return axios(url, {
        method: "post",
        headers: {
            'Accept': 'application/json',
            "Content-type": "application/json",
            Authorization: "Bearer " + accessToken
        },
        data: JSON.stringify(body)
    }).then(
        res => {
            return handleRespond(res);
        },
    ).catch(err => {
        return handleRej(err);
    });
}

const handleRespond = (res) => {
    return new Promise((resolve, reject) => {
        switch (res.status) {
            case 400:
                console.log(res)
                reject()
                break;
            case 401:
                reject()
                break;
            case 415:
                console.log(res)
                reject()
                break;
            case 500:
                console.log(res)
                reject()
                break;
            case 200:
                resolve(res)
                break;
            default:
                res.json().then(json => {
                    reject()
                    return json;
                }).catch(err => {
                    reject()
                    return err;
                })
        }
    })
}

const handleRej = (err) => {
    return new Promise((resolve, reject) => {
        reject(err);
        return err.message;
    })
}
