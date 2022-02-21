import React from 'react'
import ProductsFunctional from './productsFunctional'
import { withRouter } from 'react-router';


class ProductsClassConteiner extends React.Component {
    componentDidMount() {
        if (this.props.content.products.length < 2) { 
            this.props.getShop(this.props.type)
        }
    }
    render() {
       
        if (this.props.isLoadingAnswer) {
            return (
                <div>Loading......</div>
            )
        } else {
            return (
                <ProductsFunctional content={this.props.content}
                    type={this.props.type}
                />
            )
        }

    }

}

export default withRouter(ProductsClassConteiner);