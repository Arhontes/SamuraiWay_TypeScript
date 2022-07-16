import React from 'react';
import User from "./User/User";
import s from "./users.module.css";
import {UserType} from "../../Redux/reducers/users-reducer";
import axios from "axios";
import {usersAPI} from "../../api/api";

type UsersPropsType = {
    users: Array<UserType>
    currentPage: number
    getNewPage: (page: number) => void
    changeFollowed: (userID: number) => void
    totalCount: number
    usersCountOnPage: number
    isFetching: boolean
}

export const Users = (props: UsersPropsType) => {

    const pageCount = Math.ceil(props.totalCount / props.usersCountOnPage)
    let pages: Array<number> = []

    for (let i = 1; i <= pageCount; i++) {
        pages = [...pages, i]
    }

    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);

    const changeFollowHandler = (followed: boolean, userID: number) => {
        usersAPI.changeFollowed(userID, followed).then(resultCode => {
            if (resultCode === 0) props.changeFollowed(userID)
        })
    }

    return (

        <div>

            {slicedPages.map(page => <span key={page} className={props.currentPage === page ? s.active : s.unActive}
                                           onClick={() => props.getNewPage(page)}>{page}</span>)}
            {props.users.map(el =>
                <User id={el.id}
                      changeFollow={changeFollowHandler}
                      followed={el.followed}
                      name={el.name}
                      status={el.status}
                      key={el.id}
                      photos={el.photos}
                />)}
        </div>
    );
};




