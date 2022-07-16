import React, {Component} from 'react';
import {UsersClassPropsType} from "./UsersContainer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
class UserClass extends Component<UsersClassPropsType, {}> {

    componentDidMount() {

        if (this.props.users.length === 0) {
            this.props.toggleIsFetching(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersCountOnPage}`,{withCredentials:true})
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalCount(response.data.totalCount)
                    this.props.toggleIsFetching(false)
                })
        }
    }

    getNewPage = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersCountOnPage}`,{withCredentials:true})
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        console.log(this.props.setTotalCount.toString())
        return (<>
                {this.props.isFetching? <Preloader/>:
            <Users
                isFetching={this.props.isFetching}
                totalCount={this.props.totalCount}
                usersCountOnPage={this.props.usersCountOnPage}
                changeFollowed={this.props.changeFollowed}
                users={this.props.users}
                getNewPage={this.getNewPage}
                currentPage={this.props.currentPage}/>}
        </>
            
        );
    }
}

export default UserClass;
