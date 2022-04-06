

import { connect } from 'react-redux';
import {compose} from 'redux'
import { selectUser } from '../../../../redux/selectors';


import { registrationUser } from '../../../../redux/user-reducer';
import Registration from './registration';


let mapStateToProps = (state) => {
    return {
        user:selectUser(state)
    }
}

export default compose(connect(mapStateToProps, { registrationUser }))(Registration)