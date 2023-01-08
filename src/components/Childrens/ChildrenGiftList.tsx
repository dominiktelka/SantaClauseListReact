import React, {FormEvent, useState} from 'react';
import { GiftEntity, SetGiftForChildReq} from 'types';

interface Props{
    giftsList: GiftEntity[];
    selectedId: string;
    childId: string;
    onGiftChange: () => void;
}
export const ChildrenGiftList = (props: Props) =>{
    const[selected,setSelected] = useState<string>(props.selectedId)

    const sendForm = async(e:FormEvent) =>{
        e.preventDefault();


    const res = await fetch(`http://localhost:3001/children/gift/${props.childId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            giftId: selected,
        } as SetGiftForChildReq)
    });

    if([400,500].includes(res.status)){
        const error = await res.json()
        alert(`Error occured: ${error.message}`);
        return
    }
        props.onGiftChange();
    }

    return (<form onSubmit={sendForm}>
        <select value={selected} onChange={e=> setSelected(e.target.value)}>
            {
                props.giftsList
                    .map(gift => <option
                        value={gift.id}
                        key={gift.id}
                    >{gift.name}
                    </option>)
            }
        </select>
        <button type='submit'>Change gift</button>
    </form>)
}

