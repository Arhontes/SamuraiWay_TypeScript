import React, {Component} from 'react';
import {UsersPropsType} from "./UsersContainer";
import User from "./User/User";
import axios from "axios";

class UserClass extends Component<UsersPropsType, {}> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>this.props.setUsers(response.data.items))
    }

    render() {
        return (
            <div>
                {this.props.users.map(el =>
                    <User id={el.id}
                          changeFollow={this.props.changeFollowed}
                          followed={el.followed}
                          name={el.name}
                          status={el.status}
                          key={el.id}
                          photos={el.photos}
                    />)}
            </div>
        );
    }
}

export default UserClass;