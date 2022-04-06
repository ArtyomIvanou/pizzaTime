

import { connect } from 'react-redux';
import {compose} from 'redux'

import Entry from './entry';
import { loginUser } from './../../../../redux/user-reducer';
import { selectUser } from '../../../../redux/selectors';


let mapStateToProps = (state) => {
    return {
        user:selectUser(state)
    }
}

export default compose(connect(mapStateToProps, { loginUser }))(Entry)