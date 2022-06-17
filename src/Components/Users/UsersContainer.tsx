import {followAC, setUsersAC, UsersType, UserType} from "../../Redux/reducers/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Users} from "./Users";

type MapStatePropsType = {
    users: Array<UserType>
}
type MapDispatchPropsType = {
    changeFollowed: (userID: string) => void
    setUsers: (users: Array<UserType>) => void
}
const mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        users: state.users.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        changeFollowed: (userID: string) => {
            dispatch(followAC(userID))
        },

        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)