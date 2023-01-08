import React, {useEffect, useState} from 'react';
import {ListChildrenRes} from 'types'


import {Spinner} from "../common/Spinner/Spinner";
import { ChildrenTable } from './ChildrenTable';

export const ChildrensList = () =>{

    const [data, setData] = useState<ListChildrenRes | null>(null)


    const refreshChildren = async () =>{
        setData(null)
        const res = await fetch('http://localhost:3001/children');
        setData(await res.json())
    };

    useEffect(()=>{
        refreshChildren();
    },[])
    if(data === null){
        return <Spinner/>
    }

    return <>
        <h1>Childrens</h1>
        <ChildrenTable childrenList={data.childrenList}
                       giftsList={data.giftList}
                       onGiftChange={refreshChildren}
        />
    </>
}