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
    
    sendOrder(cart,summary,form) {
        return instance.post(`orders/`, {
            id: Math.random(),
            cart: cart,
            summary: summary,
            form: form,
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
export const entryAPI = {
    register  (form)  {
        console.log(form)
        return instance.post(`register`, {
            email: form.userEmail,
            password: form.userPassword,
            username: form.username,
            telephone: form.telephone,
            adress: form.userAdress
          })
          .then(function (response) {
            // console.log(response.status)
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.data.user;
        })
        //   .then(user => {
        //     return console.log(user)
        // })
    },
     login(form){
        //  console.log(form)
        return instance.post(`login`, {
            email: form.userEmail,
            password: form.userPassword,
         
        })
        .then(function (response) {
        //   console.log(response)
          if (response.status >= 400) {
              throw new Error("Bad response from server");
            //   return response
          }
        //   console.log(response.data)
          return response.data.user;
      })
    //     .then(user => {
    //       return console.log(user)
    //   })
    // .catch(error => {
    //     console.log(error);
    // });
      }
}


