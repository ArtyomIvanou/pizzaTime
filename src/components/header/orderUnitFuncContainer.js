import {compose} from 'redux'
import { connect } from 'react-redux';
import OrderUnit from './orderUnit';
import { watchOrders,selectSizeFinal,selectDoughFinal,addAmountOfOrder,reduceAmountOfOrder,deleteAmountOfOrder } from '../../redux/orders-reducer';

let mapStateToProps = (state,props) => ({
    id: props.content.id,
})

export default compose(connect(mapStateToProps, {watchOrders,selectSizeFinal,selectDoughFinal,addAmountOfOrder,reduceAmountOfOrder,deleteAmountOfOrder }))(OrderUnit)