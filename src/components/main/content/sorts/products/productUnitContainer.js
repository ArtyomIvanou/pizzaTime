import { addToCart } from '../../../../../redux/cart-reducer';
import { selectSize, selectDough } from '../../../../../redux/configurate-item-reducer';
import { compose } from 'redux'
// import '../../content.css';
import ProductUnit from './productUnit';
import { connect } from 'react-redux';
import { selectSelectedTypeOfShop } from '../../../../../redux/selectors';

let mapStateToProps = (state, props) => {
    let ccc = selectSelectedTypeOfShop(state, props.type)
    let bbb = ccc.products.find(a => a.id === props.number)
    return {
        content: bbb,
    }
}
export default compose(connect(mapStateToProps, { addToCart, selectSize, selectDough }))(ProductUnit)