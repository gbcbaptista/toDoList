import { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/item'
type Props = {
    item: Item;
    onClickStatusChange: (clickedItem: Item) => void;
    onDeleteClick: (deleteItem: Item) => void;
}

export const ListItem = ({ item, onClickStatusChange, onDeleteClick }: Props) => {
    const [isChecked, setIsChecked] = useState(item.done);

    const changeListItemStatus = (clickedItem: Item) => {
        onClickStatusChange(clickedItem);
        setIsChecked(clickedItem.done);
    }

    return (
        <C.GlobalContainer>
           <C.Container done={isChecked} onClick={() => changeListItemStatus(item)} >
                <input 
                    type="checkbox" 
                    checked={isChecked}
                    onChange= {e => setIsChecked(e.target.checked)}
                />
                <label>{item.name}</label>
            </C.Container>
            <C.DeleteButton onClick={() => onDeleteClick(item)}>Delete</C.DeleteButton>
        </C.GlobalContainer>
        
    );
}