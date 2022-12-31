import React from 'react';
import {NavLink} from "react-router-dom";

export const Header = () =>{
    const colorOfLink = ({ isActive}: {
        isActive: boolean;
    }) => ({color: isActive ? 'red' : 'black'})

    return (<>
        <h1>Santa App</h1>
        Menu: <NavLink style={colorOfLink} to='/gift'>Gifts</NavLink> | <NavLink style={colorOfLink} to='/children'>Children</NavLink>
        <hr/>
    </>)
}