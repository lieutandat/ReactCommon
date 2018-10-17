
const handleResponse = (response, resolve, rejest) => {
    try {
        const parseResponse = response;//.json();
        switch (parseResponse.status) {
            case 200:
               resolve(response);
               break;
            case 404:
               rejest(response);
               break;
            case 500:
               rejest(response);
               break;
            default:
                rejest(response);
                break;
        }
    } catch (error) {
        rejest(error)
    }
   
}

export const createRequest = ({requestType = "POST", url = "http://localhost" , body = {}, header = {}}) => {
    return new Promise((resolve, rejest) => {
        fetch(url, {
            method: requestType, // *GET, POST, PUT, DELETE, etc.
            headers: {
                ...optionalHeaders(),
                // "Content-Type": "application/x-www-form-urlencoded",
                ...header,
            },
            body: JSON.stringify(body), // body data type must match "Content-Type" header
            // mode: "cors", // no-cors, cors, *same-origin
            // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: "same-origin", // include, same-origin, *omit
            // redirect: "follow", // manual, *follow, error
            // referrer: "no-referrer", // no-referrer, *client
            // integrity?: "string",
            // keepalive?: true || false,
            // signal?: AbortSignal,
        })
        .then(response =>{
            handleResponse(response, resolve, rejest);
        }).catch(reason => {
            rejest(reason)
        }); 
    }) 
}

const optionalHeaders = () => ({
    "Content-Type": "application/json; charset=utf-8",
})

