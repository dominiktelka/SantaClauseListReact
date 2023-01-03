import React, {useEffect, useState} from 'react';
import {ChildEntity, GiftEntity} from 'types'


import {Spinner} from "../common/Spinner/Spinner";
import { ChildrenTable } from './ChildrenTable';

export const ChildrensList = () =>{
    const [childrenList, setChildrensList] = useState<ChildEntity[] | null>(null);
    const [gift, setGift] = useState<GiftEntity[] | null>(null);


    const refreshChildrens = async () =>{
        setChildrensList(null)
        setGift(null)
        const res = await fetch('http://localhost:3001/children');
        const data = await res.json();
        setChildrensList(data.childrenList)
        setGift(data.giftsList)
    };

    useEffect(()=>{
        refreshChildrens();
    },[])
    if(childrenList === null){
        return <Spinner/>
    }

    return <>
        <h1>Childrens</h1>
        <ChildrenTable children={childrenList}
                       onChildrenChange={refreshChildrens}/>
    </>
}