import React from 'react';

import './Dialog.css'


interface Props{
    /*
    * Title of the dialog. You can omit it to disable header in modal.
    * */
    title?: string
    children: React.ReactNode
}
export const Dialog = (props:Props) =>{

    return (
    <div className="Dialog__container">
        {
            props.title &&  <div className="Dialog__title">
                {props.title}
            </div>
        }
        <div className="Dialog__content">
            {props.children}
        </div>
    </div>
    )
}