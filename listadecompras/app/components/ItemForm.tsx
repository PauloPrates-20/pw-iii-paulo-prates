'use client';

import { useState } from 'react';
import ActionButton from './ActionButton';
import { ItemData, Item } from '../lib/definitions';
import { revalidateList } from '../lib/actions';

export default function ItemForm({ 
    setAdding,
    setEditing,
    targetItem 
}: { 
    setAdding?: () => void,
    setEditing?: () => void, 
    targetItem?: Item 
}) {
    const [name, setName] = useState(targetItem?.name ?? '');
    const [quantity, setQuantity] = useState(targetItem?.quantity ?? 1);

    function changeName(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }

    function changeQuantity(e: React.ChangeEvent<HTMLInputElement>) {
        setQuantity(parseInt(e.target.value));
    }

    function cancelItem() {
        setName('');
        setQuantity(0);
        
        if (setAdding) setAdding();
        if (setEditing) setEditing();
    }

    async function addItem() {
        const item: ItemData = {
            name: name,
            quantity: quantity,
            checked: false
        };

        const res = await fetch('http://localhost:3000/api/add-item', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
        const resJson = await res.json();

        if (!resJson.ok) {
            window.alert(resJson.errors[0]);
            return;
        }

        if (setAdding) setAdding();

        revalidateList();
    }

    async function updateItem() {
        if (targetItem) {
            const item: Item = {
                id: targetItem.id,
                name: name,
                quantity: quantity,
                checked: targetItem.checked
            }

            const res = await fetch('http://localhost:3000/api/update-item', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            });
            const resJson = await res.json();

            if (!resJson.ok) {
                window.alert(resJson.errors[0]);
                return;
            }

            if (setEditing) setEditing();
            
            revalidateList();
        }
    }

    return (
        <div>
            <input 
                type='number' 
                required 
                onChange={changeQuantity} 
                defaultValue={quantity} 
                placeholder='QUANTIDADE' 
            />
            <input 
                type='text' 
                required 
                onChange={changeName} 
                defaultValue={name}
                placeholder='NOME' 
            />
            <ActionButton handler={targetItem ? updateItem : addItem} >SALVAR</ActionButton>
            <ActionButton handler={cancelItem} >CANCELAR</ActionButton>
        </div>
    );
}