'use client';

import { Item } from '../lib/definitions';
import ActionButton from './ActionButton';
import ItemEntry from './ItemEntry';
import { useState } from 'react';
import ItemForm from './ItemForm';

export default function ItemList({ items }: { items: Item[] }) {
    const [adding, setAdding] = useState(false);
    const [editting, setEditting] = useState(false);
    const [targetItem, setTargetItem] = useState<Item>(items[0]);

    function toggleAddingState() {
        setAdding(adding ? false : true);
    }

    function toggleEdittingState() {
        setEditting(editting ? false : true);
    }

    function updateTargetItem(item: Item) {
        setTargetItem(item);
    }

    return (
        <div className='w-full'>
            <h3 className='text-center font-bold m-2'>Lista de Compras</h3>
            <ul className='flex flex-col justify-start items-start gap-1 my-4'>
                {items.map((item: Item, index: number) => (
                    <ItemEntry item={item} setTargetItem={updateTargetItem} setEditting={toggleEdittingState} key={index} />
                ))}
            </ul>
            {!adding ? !editting ? 
            <ActionButton handler={toggleAddingState}>+</ActionButton> : 
            <ItemForm setEditing={toggleEdittingState} targetItem={targetItem} /> : 
            <ItemForm setAdding={toggleAddingState} />}
        </div>
    );
}