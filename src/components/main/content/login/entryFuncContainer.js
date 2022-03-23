

import { connect } from 'react-redux';
import {compose} from 'redux'

import Entry from './entry';
import { loginUser } from './../../../../redux/user-reducer';


let mapStateToProps = (state) => {
    return {
        // summary:state.cart.summary,
        // cart: state.cart.cart,
        // validation: state.cart.validation
    }
}

export default compose(connect(mapStateToProps, { loginUser }))(Entry)