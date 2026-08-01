import axios from "axios";

const api = axios.create({

    baseURL: "https://unfazed-backend.onrender.com/api"

});

export default api;