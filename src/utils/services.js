import { createRequest } from "./baseService";

const LOGIN_URL = "http://localhost:3000/login";

const createBaseHeader = () => {
    return {
        session: "",
        requestUid: "",
    }
}

export const userLoginApi = ({username, password}) => {
    return createRequest({
        requestType: "POST",
        url: LOGIN_URL,
        body: {
            username: username,
            password: password
        },
        header: {
            ...createBaseHeader()
        }
    })
}