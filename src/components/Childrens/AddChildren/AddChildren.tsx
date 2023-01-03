import React, {FormEvent, useState} from 'react';

import {Spinner} from "../../common/Spinner/Spinner";

export const  AddChildren = () =>{


    return <form>
        <h2>Add Children</h2>
        <p>
            <label> Name: <br/>
                <input type="text"
                />
            </label>
        </p>
        <p>
            <label> Count: <br/>
                <input type="number"

                />
            </label>
        </p>
        <button type='submit'>Add</button>
    </form>
}