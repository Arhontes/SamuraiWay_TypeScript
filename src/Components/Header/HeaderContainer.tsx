import React, {Component, Dispatch} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {authReducerThunkCreator, setAuthUserDataAC} from "../../Redux/reducers/auth-reducer";
import {compose} from "redux";

class HeaderClass extends Component<HeaderPropsType, {}> {
    componentDidMount() {
        this.props.authMe()
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth}/>
        );
    }
}

type MapStatePropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}
type HeaderPropsType = MapStatePropsType & {
    setAuthUserData: typeof setAuthUserDataAC
    authMe: () => void
}


export const HeaderContainer = compose(
    connect(mapStateToProps, {
        setAuthUserData: setAuthUserDataAC,
        authMe: authReducerThunkCreator
    })
)(HeaderClass)

