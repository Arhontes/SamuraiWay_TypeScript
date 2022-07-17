import axios from "axios";
import {Params} from "react-router-dom";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "254c5ae8-a015-4ee0-8444-e1c6290e2b9d"
    }
})

export const usersAPI = {
    getUsers: (currentPage: number, usersCountOnPage: number) => instance.get(`users?page=${currentPage}&count=${usersCountOnPage}`)
        .then(response => response.data)
    ,
    changeFollowed: (userID: number, followed: boolean) => {
        if (followed) return instance.delete(`follow/${userID}`)
            .then(response => response.data.resultCode)
        return instance.post(`follow/${userID}`, {})
            .then(response => response.data.resultCode)
    }
}
export const headerAPI = {
    setAuthData: () => {
        return instance.get(`auth/me`).then(response => response.data)
    }
}
export const profilePageAPI = {
    getUserProfile: (params: Readonly<Params<string>>) => {
        return instance.get(`/profile/${params["*"]}`)
            .then(response => response.data)
    }
}




