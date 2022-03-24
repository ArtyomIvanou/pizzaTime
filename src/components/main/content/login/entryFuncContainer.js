

import { connect } from 'react-redux';
import {compose} from 'redux'

import Entry from './entry';
import { loginUser } from './../../../../redux/user-reducer';


let mapStateToProps = (state) => {
    return {
        user:state.user
    }
}

export default compose(connect(mapStateToProps, { loginUser }))(Entry)