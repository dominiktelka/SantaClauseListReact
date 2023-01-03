import React from 'react';
import { AddChildren } from '../components/Childrens/AddChildren/AddChildren';
import { ChildrensList } from '../components/Childrens/ChildrenList';



export const ChildView = () =>{

    return (
        <>
            <ChildrensList/>
            <AddChildren/>
        </>
    )

}