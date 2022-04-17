import React,{useEffect} from 'react'
import ProductsFunctional from './productsFunctional';
import { getShop} from '../../../../../redux/configurate-item-reducer';
import {compose} from 'redux'
import { connect } from 'react-redux';
// import { withRouter } from 'react-router';
import { selectSelectedTypeOfShop, selectSettingsIsLoading } from '../../../../../redux/selectors';

const ProductsFuncConteiner = (props) => {
    useEffect(() => {
        if (props.content.products.length < 2) {
            props.getShop(props.type)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.type]);
    let result
    if (props.isLoadingAnswer) {
        result = <div>Loading......</div>
    } else {
        result = <ProductsFunctional content={props.content}
            type={props.type} {...props}
        />
    }
    return <div> {result}</div>

}
let mapStateToProps = (state, props) => ({
    content: selectSelectedTypeOfShop(state, props.selectedType),
    type: props.selectedType,
    isLoadingAnswer: selectSettingsIsLoading(state)
})

export default compose(connect(mapStateToProps, {getShop})/*,withRouter*/)(ProductsFuncConteiner)