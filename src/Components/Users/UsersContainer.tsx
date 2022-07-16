import {
    toggleIsFetchingAC,
    followAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    UserType, toggleFollowingInProgressAC
} from "../../Redux/reducers/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import UserClass from "./UserClass";

type MapStatePropsType = {
    users: Array<UserType>
    totalCount:number
    usersCountOnPage:number
    currentPage:number
    isFetching:boolean
    followingInProgress:boolean
}
type MapDispatchPropsType = {
    changeFollowed: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setTotalCount:(totalCount:number)=>void
    setCurrentPage: (currentPage:number)=>void
    toggleIsFetching: (isFetching:boolean)=>void
    toggleFollowingInProgress:(following:boolean)=>void
}
export type UsersClassPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        users: state.users.users,
        totalCount:state.users.totalCount,
        usersCountOnPage:state.users.usersCountOnPage,
        currentPage:state.users.currentPage,
        isFetching:state.users.isFetching,
        followingInProgress:state.users.followingInProgress
    }
}
/*const mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
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
        },
        toggleIsFetching: (isFetching:boolean)=>{
          dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}*/

export const UsersContainer = connect(mapStateToProps, {
    changeFollowed: followAC,
    setUsers:setUsersAC,
    setTotalCount:setTotalCountAC,
    setCurrentPage:setCurrentPageAC,
    toggleIsFetching:toggleIsFetchingAC,
    toggleFollowingInProgress:toggleFollowingInProgressAC
})(UserClass)
