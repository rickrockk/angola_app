// /stores/UserStore.js
import { makeAutoObservable } from "mobx";
import axios from 'axios';

class UserStore {
    user = null;
    token = localStorage.getItem('token');
    passport = null;
    insurance = null;

    constructor() {
        makeAutoObservable(this);
        if (this.token) {
            this.fetchUser();
        }
    }

    setToken(token) {
        this.token = token;
        localStorage.setItem('token', token);
        this.fetchUser();
    }

    clearToken() {
        this.token = null;
        localStorage.removeItem('token');
        this.user = null;
        this.passport = null;
        this.insurance = null;
    }

    async fetchUser(token = this.token) {
        if (!this.token) return;
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/user/me/', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            this.user = response.data;
            await this.fetchPassport();
            await this.fetchInsurance();
        } catch (error) {
            console.error('Failed to fetch user', error);
            this.clearToken();
        }
    }

    async fetchPassport() {
        if (!this.token) return;
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/passport/', {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            });
            this.passport = response.data;
        } catch (error) {
            console.error('Failed to fetch passport', error);
        }
    }

    async fetchInsurance() {
        if (!this.token) return;
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/insurance/', {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            });
            this.insurance = response.data;
        } catch (error) {
            console.error('Failed to fetch insurance', error);
        }
    }

    logout() {
        this.clearToken();
    }
}

export const userStore = new UserStore();
