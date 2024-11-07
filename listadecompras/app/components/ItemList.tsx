'use client';

import { Item, ItemData } from '../lib/definitions';
import ActionButton from './ActionButton';
import ItemEntry from './ItemEntry';
import { useState } from 'react';
import ItemForm from './ItemForm';

export default function ItemList({ items }: { items: Item[] }) {
    const [adding, setAdding] = useState(false);

    function toggleAddingState() {
        setAdding(adding ? false : true);
    }

    return (
        <div>
            <h3>Lista de Compras</h3>
            <ul>
                {items.map((item: Item, index: number) => (
                    <ItemEntry item={item} key={index} />
                ))}
                {!adding ? <ActionButton text='ADICIONAR ITEM' handler={toggleAddingState} /> : <ItemForm />}
            </ul>
        </div>
    );
}