import React, {useEffect, useState} from 'react';
import {GiftEntity} from 'types'

import {GiftsTable} from "./GiftTable";
import {Spinner} from "../common/Spinner/Spinner";

export const GiftsList = () =>{
    const [giftsList, setGifstList] = useState<GiftEntity[] | null>(null);


    const refreshGifts = async () =>{
        setGifstList(null)
        const res = await fetch('http://localhost:3001/gift');
        const data = await res.json();
        setGifstList(data.giftsList)
    };

    useEffect(()=>{
        refreshGifts();
    },[])
    if(giftsList === null){
        return <Spinner/>
    }

    return <>
      <h1>Gifts</h1>
      <GiftsTable gifts={giftsList} onGiftsChange={refreshGifts}/>

    </>
}