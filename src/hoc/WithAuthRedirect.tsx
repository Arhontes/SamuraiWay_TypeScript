import React, {Component, ComponentType} from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";

type MapStatePropsType = {
    isAuth:boolean
}
const mapStateToProps = (state:AppStateType):MapStatePropsType=> {
    return {isAuth: state.auth.isAuth}
}


export function withAuthRedirect <T>(Component:ComponentType<T>){

    //AuthRedirectComponent === <Component {...restProps as T}/
    const AuthRedirectComponent = (props:MapStatePropsType)=>{
            debugger
            const {isAuth, ...restProps} = props
            if(!props.isAuth) return <Navigate to={"/login"}/>

            return <Component {...restProps as T}/>
        }

                                         //NewComponent -
    let ConnectedRedirectComponent = connect(mapStateToProps)(AuthRedirectComponent)

    return ConnectedRedirectComponent
}