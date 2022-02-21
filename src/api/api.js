import axios from "axios";

const instance = axios.create(
    {
        baseURL: 'http://localhost:3001/'
    }
)

export const ordersAPI = {
    getOrders() {
        return instance.get(`orders/`, {
        })
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }


                return response.data;
            })
    },
    deleteOrderApi (id) {
        return instance.delete(`orders/${id}`, {
        })
        
       
        
    },
    
    sendOrder(cart,summary,tel) {
        return instance.post(`orders/`, {
            id: Math.random(),
            cart: cart,
            summary: summary,
            tel: tel,
        })
          
    },
}
export const shopAPI = {
    getProducts  (type)  {
        return instance.get(`${type}`, {
        })
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.data;
            })
    },
}


