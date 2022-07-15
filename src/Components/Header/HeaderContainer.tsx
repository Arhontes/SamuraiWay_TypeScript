import React, {Component, Dispatch} from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {setAuthUserDataAC} from "../../Redux/reducers/auth-reducer";

type HeaderPropsType = {
    setAuthUserData:typeof setAuthUserDataAC
}
class HeaderClass extends Component<HeaderPropsType,{}> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response=>{
            if(response.data.resultCode===0) {
                this.props.setAuthUserData(response.data.data)
            }
        })
    }

    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
}
type MapStatePropsType = {

}
const mapStateToProps = (state:AppStateType):MapStatePropsType=> {
    return {

}
}

export const HeaderContainer =  connect(mapStateToProps,{setAuthUserData:setAuthUserDataAC})(HeaderClass)
