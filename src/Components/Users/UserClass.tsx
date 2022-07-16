import React, {Component} from 'react';
import {UsersClassPropsType} from "./UsersContainer";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UserClass extends Component<UsersClassPropsType, {}> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.usersCountOnPage)
    }

    getNewPage = (page: number) => {
        this.props.getUsers(page, this.props.usersCountOnPage)
    }

    changeFollow = (userID: number,followed: boolean) => {
       this.props.changeFollowed(userID,followed)
    }
    render() {
        return (<>
                {this.props.isFetching? <Preloader/>:
            <Users
                changeFollow={this.changeFollow}
                isFetching={this.props.isFetching}
                totalCount={this.props.totalCount}
                usersCountOnPage={this.props.usersCountOnPage}
                users={this.props.users}
                getNewPage={this.getNewPage}
                currentPage={this.props.currentPage}/>}
        </>
            
        );
    }
}

export default UserClass;
