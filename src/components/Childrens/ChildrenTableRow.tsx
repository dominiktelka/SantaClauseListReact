import React, {MouseEvent, useEffect, useState} from 'react';
import {ChildEntity, GiftEntity} from "types";
import {Link} from "react-router-dom";

interface Props {
    child: ChildEntity;
    onChildrenChange: () => void;
}

export const ChildrenTableRow = (props:Props) =>{

    const [data,setData] = useState<GiftEntity|null>(null)
    const [gift,setGift] = useState<string>('')

    useEffect(()=>{
        (async () =>{
            const res = await fetch(`http://localhost:3001/gift/${props.child.id}`);
            const data = await res.json();
            setData(data);
            //console.log(data);
        })();
    },[])

    if(data=== null){
        return <p>Wczytywanie danych...</p>
    }


    const deleteChild = async (e: MouseEvent) =>{
        e.preventDefault();

        if(!window.confirm(`Are you sure you want to remove ${props.child.name}?`)){
            return;
        };

        const res = await fetch(`http://localhost:3001/children/${props.child.id}`,{
            method: 'DELETE',
        });
        if([400,500].includes(res.status)){
            const error = await res.json
            alert(`Error occurred: ${error}`);
            return
        };
        props.onChildrenChange();
    }
    return <>
        <tr>
            <th>
                <Link to={`/children/gift/${props.child.id}`}>
                    {props.child.name}
                </Link>
            </th>
            <td><ChildrenGiftList/></td>
            <td>
                <a href="#" onClick={deleteChild}>✖</a>
            </td>
        </tr>
    </>
}