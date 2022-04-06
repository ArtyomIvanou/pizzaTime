
import Checkout from './checkout';
import { connect } from 'react-redux';
import {compose} from 'redux'
import { deleteItem, sendOrder} from '../../../../redux/cart-reducer';
import { selectSummary, selectValidation, selectUserInfo,selectCart } from './../../../../redux/selectors';


let mapStateToProps = (state) => {
    return {
        summary:selectSummary(state),
        cart: selectCart(state),
        validation: selectValidation(state),
        user: selectUserInfo(state)
    }
}

export default compose(connect(mapStateToProps, { deleteItem,sendOrder }))(Checkout)