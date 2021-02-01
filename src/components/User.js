import React from 'react'
import {connect} from "react-redux";
import { getUser } from "../store/actions/user.actions";

function User(props) {
    const getUser = () => {
        props.getUser()
    }

    const fullName = () => {
        if (Object.keys(props.user).length === 0) return ''
        return `${props.user.first_name} ${props.user.last_name}`
    }

    return (
        <div>
            <button onClick={getUser}>Get user</button>
            {fullName()}
        </div>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user
})

const mapActionsToProps = (dispatch) => ({
    getUser: () => dispatch(getUser()),
})
export default connect(mapStateToProps, mapActionsToProps)(User);
