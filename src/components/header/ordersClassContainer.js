import React from 'react'
// import ProductsFunctional from './productsFunctional'
// import isoFetch from 'isomorphic-fetch';
// import { withRouter } from 'react-router';
import axios from 'axios';
import Orders from './orders';


// -------------------------------------------------



class OrdersClassConteiner extends React.Component {


    componentDidMount() {
       
            this.props.isLoading(true)
            axios.get(`http://localhost:3001/orders`)
                .then(function (response) {
                    if (response.status >= 400) {
                        throw new Error("Bad response from server");
                    }
                  
                    
                    return response.data;
                })
                //                 .then(function (stories) {
                //                     // let aaa=stories.find(a=>a.type === this.props.type)
                // // this.props.addToShop(this.props.type,aaa)
                //                     console.log(stories);
                //                     // console.log('sdvjbdsv');
                //                 });
                .then(res => {
                    
                    // console.log(res)
                    this.props.isLoading(false)
                   
                    this.props.watchOrders(res)
                    // this.forceUpdate()
                })
        
    }


    render() {
        //    console.log(this.props.type)
        if (this.props.isLoadingAnswer) {
            return (
              <div>Loading......</div>
            )
        } else {
            return (
                <Orders content={this.props.content} watchOrders={this.props.watchOrders}/>
            )   
        }
        
    }

}

export default OrdersClassConteiner;