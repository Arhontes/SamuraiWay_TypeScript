import React, {ChangeEvent, ChangeEventHandler, useEffect, useState} from 'react';
type ProfileStatusPropsType = {
    status:string
    updateUserStatus:(status:string)=>void
}

export function ProfileStatus(props: ProfileStatusPropsType) {
    console.log("rendering ProfileStatus")
    const [localUserStatus, setLocalUserStatus] = useState<string>(props.status)
    useEffect(()=>{
        setLocalUserStatus(props.status)
    }, [props.status])
    console.log("localUserStatus" + localUserStatus)
    const [editMode, setEditMode] = useState(false)
    const onEnterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            props.updateUserStatus(localUserStatus)
            setEditMode(false)
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalUserStatus(e.currentTarget.value)
    }
    const onBlurHandler = () =>{
        props.updateUserStatus(localUserStatus)
        setEditMode(!editMode)
    }
    const textStatus = props.status!==""?props.status:"no status here"
    return (
        <>
            {!editMode ?
                <div>
                    <span onDoubleClick={() => setEditMode(true)}>{textStatus}</span>
                </div> :
                <input autoFocus={true}
                       value={localUserStatus}
                       onKeyPress={onEnterHandler}
                       onBlur={onBlurHandler}
                       type="text"
                       onChange={onChangeHandler}/>}
        </>

    );
}

