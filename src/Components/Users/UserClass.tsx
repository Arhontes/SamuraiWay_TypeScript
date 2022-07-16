import React, {Component} from 'react';
import {UsersClassPropsType} from "./UsersContainer";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UserClass extends Component<UsersClassPropsType, {}> {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleIsFetching(true)
            usersAPI.getUsers(this.props.currentPage, this.props.usersCountOnPage).then(data => {
                    this.props.setUsers(data.items)
                    this.props.setTotalCount(data.totalCount)
                    this.props.toggleIsFetching(false)
                })
        }
    }

    getNewPage = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(page, this.props.usersCountOnPage).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }
    changeFollow = (userID: number,followed: boolean) => {
        this.props.toggleFollowingInProgress(true)
        usersAPI.changeFollowed(userID, followed).then(resultCode => {
            if (resultCode === 0) {
                this.props.changeFollowed(userID)
                this.props.toggleFollowingInProgress(false)
            }
        })
    }
    render() {
        console.log(this.props.setTotalCount.toString())
        return (<>
                {this.props.isFetching? <Preloader/>:
            <Users
                changeFollow={this.changeFollow}
                followingInProgress={this.props.followingInProgress}
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
