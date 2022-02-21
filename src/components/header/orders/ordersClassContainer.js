import React from 'react'

import Orders from './orders';




class OrdersClassConteiner extends React.Component {


    componentDidMount() {

        this.props.getOrders()


    }


    render() {

        if (this.props.isLoadingAnswer) {
            return (
                <div>Loading......</div>
            )
        } else {
            return (
                <Orders
                    content={this.props.content}
                    deleteOrder={this.props.deleteOrder}
                />
            )
        }

    }

}

export default OrdersClassConteiner;