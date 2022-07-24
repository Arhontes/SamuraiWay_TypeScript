import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';

export function ProfileStatus(props: any) {
    const [text, setText] = useState<string>("some status here")
    const [editMode, setEditMode] = useState(false)
    const onEnterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            setEditMode(false)
            setText(text)
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }

    return (
        <>
            {!editMode ?
                <div>
                    <span onDoubleClick={() => setEditMode(true)}>{text}</span>
                </div> :
                <input autoFocus={true}
                       value={text}
                       onKeyPress={onEnterHandler}
                       onBlur={() => setEditMode(!editMode)}
                       type="text"
                       onChange={onChangeHandler}/>}
        </>

    );
}

