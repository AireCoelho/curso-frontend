import React from 'react';
import './HeaderPage.css'

const HeaderPage = ({title}) => {
    return(
        <div className="header-app">
        <h2>{title}</h2>
        </div>
    )
}

export default HeaderPage;