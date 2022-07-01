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
    getNewPage = (page:number)=>{
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.countOnPage}`)
            .then(response=>{
                this.props.setUsers(response.data.items)})
    }
    render() {
        const pageCount = Math.ceil(this.props.totalCount/this.props.countOnPage)
        let pages:Array<number> = []

        for (let i = 1; i <= pageCount; i++) {
            pages = [...pages,i]
        }
        let curP = this.props.currentPage;
        let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
        let curPL = curP + 5;
        let slicedPages = pages.slice( curPF, curPL);
        return (
            <div>
                {slicedPages.map(page=><span key = {page} className={this.props.currentPage===page?s.active:s.unActive} onClick={()=>this.getNewPage(page)}>{page}</span>)}
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