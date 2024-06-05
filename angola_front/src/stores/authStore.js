import { makeAutoObservable } from "mobx";
import { userStore } from "./userStore.js";
import axios from 'axios';

class AuthStore {
    user = null;
    token = null;

    constructor() {
        makeAutoObservable(this);
    }

    login = async (credentials) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/user/login/', credentials);
            if (response.status === 200) {
                this.setToken(response.data.accessToken);
                await userStore.fetchUser(response.data.accessToken);
                this.user = userStore.user;
            }
        } catch (error) {
            throw error;
        }
    };

    register = async (data) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/user/register/', data);
            if (response.status === 200) {
                this.user = response.data;
            }
        } catch (error) {
            throw error;
        }
    };

    logout = () => {
        this.user = null;
        userStore.clearToken();
    };


    setToken(token) {
        this.token = token;
        localStorage.setItem("token", token);
    }
}

export const authStore = new AuthStore();
