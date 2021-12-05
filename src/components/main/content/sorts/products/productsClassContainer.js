import React from 'react'
import ProductsFunctional from './productsFunctional'
import isoFetch from 'isomorphic-fetch';




// -------------------------------------------------



class ProductsClassConteiner extends React.Component {


    componentDidMount() {
        //  isoFetch('http://localhost:3001/products')
        // .then(function(response) {
        //     if (response.status >= 400) {
        //         throw new Error("Bad response from server");
        //     }
        //     return response.json();
        // })
        // .then(function(stories) {

        //     console.log(stories);
        //     // console.log('sdvjbdsv');
        // }); 
        console.log(this.props.content.products.length)
        if (this.props.content.products.length <2) {
            // console.log(this.props.content)
            //http://localhost:3001/${this.props.type}?_page=1&_limit=20
            this.props.isLoading(true)
            isoFetch(`http://localhost:3001/${this.props.type}`)
                .then(function (response) {
                    if (response.status >= 400) {
                        throw new Error("Bad response from server");
                    }
                  
                    
                    return response.json();
                })
                //                 .then(function (stories) {
                //                     // let aaa=stories.find(a=>a.type === this.props.type)
                // // this.props.addToShop(this.props.type,aaa)
                //                     console.log(stories);
                //                     // console.log('sdvjbdsv');
                //                 });
                .then(res => {
                    
                    console.log(res)
                    this.props.isLoading(false)
                    // let aaa=res.find(a=>a.type === this.props.type)
                    // console.log(aaa)
                    this.props.addToShop(this.props.type,res)
                    this.forceUpdate()
                })
        }
    }


    render() {
        //    console.log(this.props.type)
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

export default ProductsClassConteiner;