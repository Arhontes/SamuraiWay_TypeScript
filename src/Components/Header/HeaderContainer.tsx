import React, {Component, Dispatch} from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {setAuthUserDataAC} from "../../Redux/reducers/auth-reducer";

class HeaderClass extends Component<HeaderPropsType, {}> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {
                this.props.setAuthUserData(response.data.data)
            }
        })
    }

    render() {
        return (

                <Header isAuth={this.props.isAuth}/>

        );
    }
}
type MapStatePropsType = {
    isAuth:boolean
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth:state.auth.isAuth
    }
}
type HeaderPropsType = MapStatePropsType&{
    setAuthUserData: typeof setAuthUserDataAC
}

export const HeaderContainer = connect(mapStateToProps, {setAuthUserData: setAuthUserDataAC})(HeaderClass)
