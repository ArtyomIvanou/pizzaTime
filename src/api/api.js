import axios from "axios";

const instance = axios.create(
    {
        baseURL: 'http://localhost:3001/'
    }
)

export const ordersAPI = {
    async getOrders() {
        const response = await instance.get(`orders/`, {});
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.data;
    },
    deleteOrderApi(id) {
        return instance.delete(`orders/${id}`, {
        })
    },

    sendOrder(cart, summary, form) {
        return instance.post(`orders/`, {
            id: Math.random(),
            cart: cart,
            summary: summary,
            form: form,
        })

    },
}
export const shopAPI = {
    async getProducts(type) {
        const response = await instance.get(`${type}`, {});
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.data;
    },
}
export const entryAPI = {
    async register(form) {
        const response = await instance.post(`register`, {
            email: form.userEmail,
            password: form.userPassword,
            username: form.username,
            telephone: form.telephone,
            adress: form.userAdress
        });
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.data.user;

    },
    async login(form) {
        const response = await instance.post(`login`, {
            email: form.userEmail,
            password: form.userPassword,
        });
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.data.user;
    }
}


