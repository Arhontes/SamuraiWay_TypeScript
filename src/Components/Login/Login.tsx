import React from 'react';
import LoginReduxForm from "./LoginForm";

export const Login = ()=> {
    const onSubmitHandler = (formData:any)=>{
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmitHandler}/>
        </div>
    );
};

