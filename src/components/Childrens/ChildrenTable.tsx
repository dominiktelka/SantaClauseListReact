import React from 'react';
import {ChildEntity} from 'types';
import {ChildrenTableRow} from "./ChildrenTableRow";


interface Props{
    children: ChildEntity[];
    onChildrenChange: () => void;
}

export const ChildrenTable = (props:Props) =>(
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Gift</th>
        </tr>
        </thead>
        <tbody>
        {
            props.children.map(child =>(
                <ChildrenTableRow child={child} key={child.id} onChildrenChange={props.onChildrenChange}/>))
        }
        </tbody>
    </table>
)