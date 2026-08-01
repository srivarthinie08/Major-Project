import api from "./api";

export const registerUser = (data) => {

    return api.post("/auth/register", data);

};

export const loginUser = (data) => {

    return api.post("/auth/login", data);

};

export const getProfile = (token) => {

    return api.get("/therapist/profile", {

        headers: {

            Authorization: token

        }

    });

};