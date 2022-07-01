import React, {Component} from 'react';
import {UsersPropsType} from "./UsersContainer";
import User from "./User/User";
import axios from "axios";
import s from "./users.module.css"
class UserClass extends Component<UsersPropsType, {}> {
    componentDidMount() {
        if(this.props.users.length===0){
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countOnPage}`)
                .then(response=>{
                    this.props.setUsers(response.data.items)
                    this.props.setTotalCount(response.data.totalCount)
                })
        }
    }
    render() {
        const pageCount = Math.ceil(this.props.totalCount/this.props.countOnPage)
        const pages = []
        const getNewPage = (page:number)=>{
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.countOnPage}`)
                .then(response=>{
                    this.props.setCurrentPage(page)
                    this.props.setUsers(response.data.items)})
        }
        for (let i = 1; i <= pageCount; i++) {
            pages.push(<span key = {i} className={this.props.currentPage===i?s.active:""} onClick={()=>getNewPage(i)}>{i}</span>)
        }
        return (
            <div>
                {pages}
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