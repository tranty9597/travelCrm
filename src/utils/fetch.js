import store from "../";

export const post = (url, body) => {
    let accessToken = store.getState().login.user.accessToken;
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + accessToken
        },
        body: body
    }).then(
        res => {
            // return handleRespond(res)
            console.log(res)
        },
    ).catch(err => { console.log(err) });
}
