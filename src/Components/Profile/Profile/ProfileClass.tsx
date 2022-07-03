import React, {Component} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {ProfilePropsType} from "./ProfileContainer";


export class ProfileClass extends Component<ProfilePropsType,{}> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })

    }
    render() {
        console.log(this.props.userProfile)
        return (
            <Profile {...this.props} />
        );
    }
}


