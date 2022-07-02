import React from 'react';
import preloader from "../../../assets/images/Spinner-1s-200px.svg";
type PreloaderPropsType={

}
export function Preloader(props:PreloaderPropsType) {
    return (
        <img src={preloader} alt=""/>
    );
}

