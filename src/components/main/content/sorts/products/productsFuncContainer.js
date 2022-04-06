// import React from 'react'
import ProductsClassConteiner from './productsClassContainer'
import { getShop} from '../../../../../redux/configurate-item-reducer';
import {compose} from 'redux'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectSelectedTypeOfShop, selectSettingsIsLoading } from '../../../../../redux/selectors';


let mapStateToProps = (state, props) => {
    let content=selectSelectedTypeOfShop(state,props.selectedType)
    return {
        content: content,
        type: props.selectedType,
        isLoadingAnswer:selectSettingsIsLoading(state)

    }
}

export default compose(connect(mapStateToProps, {getShop}),withRouter)(ProductsClassConteiner)