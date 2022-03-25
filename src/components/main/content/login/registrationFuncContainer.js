

import { connect } from 'react-redux';
import {compose} from 'redux'


import { registrationUser } from '../../../../redux/user-reducer';
import Registration from './registration';


let mapStateToProps = (state) => {
    return {
        user:state.user
    }
}

export default compose(connect(mapStateToProps, { registrationUser }))(Registration)