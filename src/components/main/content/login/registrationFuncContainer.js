

import { connect } from 'react-redux';
import {compose} from 'redux'


import { registrationUser } from '../../../../redux/user-reducer';
import Registration from './registration';


let mapStateToProps = (state) => {
    return {
        // summary:state.cart.summary,
        // cart: state.cart.cart,
        // validation: state.cart.validation
    }
}

export default compose(connect(mapStateToProps, { registrationUser }))(Registration)