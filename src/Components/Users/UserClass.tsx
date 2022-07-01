import React, {Component} from 'react';
import {UsersPropsType} from "./UsersContainer";
import User from "./User/User";
import axios from "axios";

class UserClass extends Component<UsersPropsType, {}> {
    componentDidMount() {
        alert("рендер успешно прошел, запускаю действие после вмонтирования")
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>this.props.setUsers(response.data.items))
    }
    componentDidUpdate(prevProps: Readonly<UsersPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        alert("чувак это тот же самый объект, но пришли новые пропсы поэтому прошло обновление")
    }
    componentWillUpdate(nextProps: Readonly<UsersPropsType>, nextState: Readonly<{}>, nextContext: any) {
        alert("ща обновлюсь")
    }

    componentWillUnmount() {
        alert("черт меня удаляют но я вернусь!")
    }

    render() {
        alert("начал рендериться")
        return (
            <div>
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