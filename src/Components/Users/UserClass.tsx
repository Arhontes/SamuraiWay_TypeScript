import React, {Component} from 'react';
import {UsersClassPropsType} from "./UsersContainer";
import axios from "axios";
import {Users} from "./Users";

class UserClass extends Component<UsersClassPropsType, {}> {
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersCountOnPage}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalCount(response.data.totalCount)
                })
        }
    }

    getNewPage = (page: number) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersCountOnPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <Users totalCount={this.props.totalCount}
                   usersCountOnPage={this.props.usersCountOnPage}
                   changeFollowed={this.props.changeFollowed}
                   users={this.props.users}
                   getNewPage={this.getNewPage}
                   currentPage={this.props.currentPage}/>
        );
    }
}

export default UserClass;