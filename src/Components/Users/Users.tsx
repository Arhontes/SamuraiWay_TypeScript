// import React from 'react';
// import {UsersPropsType} from "./UsersContainer";
// import {v1} from "uuid";
// import User from "./User/User";
//
//
// export const Users = (props: UsersPropsType) => {
//
//     const usersList = props.users.map(el=><User id={el.id} changeFollow={props.changeFollowed} followed={el.followed}
//                                                 name={el.name} status={el.status}
//                                                 key={el.id}/>)
//     return (
//         <div>
//             <button onClick={()=> props.setUsers([
//                 {
//                     id: v1(),
//                     name: "Alex Shepard",
//                     status: "I live in Disgardium",
//                     location: {
//                         city: 'Kenema',
//                         country: 'America'
//                     },
//                     followed: true,
//                 },
//                 {
//                     id: v1(),
//                     name: "Alex Betke",
//                     status: "Just keep learning",
//                     location: {
//                         city: 'Onega',
//                         country: 'Russia'
//                     },
//                     followed: true,
//                 },
//                 {
//                     id: v1(),
//                     name: "Alex Ivanov",
//                     status: "I am stupid guy",
//                     location: {
//                         city: 'Kenema',
//                         country: 'America'
//                     },
//                     followed: true,
//                 },])}>show users</button>
//             {usersList}
//         </div>
//     );
// };

export default {}


