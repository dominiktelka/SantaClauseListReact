import React from 'react';
import {ChildEntity, GiftEntity} from "types";
import {Link} from "react-router-dom";
import {ChildrenGiftList} from "./ChildrenGiftList";

interface Props {
    child: ChildEntity;
    giftsList: GiftEntity[];
    onGiftChange: () => void;
}

export const ChildrenTableRow = (props:Props) =>{

    return <>
        <tr>
            <th>
                <Link to={`/children/gift/${props.child.id}`}>
                    {props.child.name}
                </Link>
            </th>
            <td><ChildrenGiftList
                giftsList={props.giftsList}
                selectedId={props.child.giftId}
                childId={props.child.id as string}
                onGiftChange={props.onGiftChange}
            /></td>
        </tr>
    </>
}