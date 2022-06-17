import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import {v1} from "uuid";
import User from "./User/User";


export const Users = (props: UsersPropsType) => {

    const usersList = props.users.map(el=><User id={el.id} changeFollow={props.changeFollowed} followed={el.followed}fullName={el.fullName}location={el.location}status={el.status}
    key={el.id}/>)
    return (
        <div>
            <button onClick={()=> props.setUsers([
                {
                    id: v1(),
                    fullName: "Alex Shepard",
                    status: "I live in Disgardium",
                    location: {
                        city: 'Kenema',
                        country: 'America'
                    },
                    followed: true,
                },
                {
                    id: v1(),
                    fullName: "Alex Betke",
                    status: "Just keep learning",
                    location: {
                        city: 'Onega',
                        country: 'Russia'
                    },
                    followed: true,
                },
                {
                    id: v1(),
                    fullName: "Alex Ivanov",
                    status: "I am stupid guy",
                    location: {
                        city: 'Kenema',
                        country: 'America'
                    },
                    followed: true,
                },])}></button>
            {usersList}
        </div>
    );
};




