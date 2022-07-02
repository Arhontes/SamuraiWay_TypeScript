import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, UserType} from "../../Redux/reducers/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import UserClass from "./UserClass";

type MapStatePropsType = {
    users: Array<UserType>
    totalCount:number
    usersCountOnPage:number
    currentPage:number
}
type MapDispatchPropsType = {
    changeFollowed: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setTotalCount:(totalCount:number)=>void
    setCurrentPage: (currentPage:number)=>void
}
export type UsersClassPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        users: state.users.users,
        totalCount:state.users.totalCount,
        usersCountOnPage:state.users.usersCountOnPage,
        currentPage:state.users.currentPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        changeFollowed: (userID: number) => {
            dispatch(followAC(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setTotalCount:(totalCount:number)=>{
            dispatch(setTotalCountAC(totalCount))
        },
        setCurrentPage:(currentPage)=>{
            dispatch(setCurrentPageAC(currentPage))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserClass)