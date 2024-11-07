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
        <div>
            <h3>Lista de Compras</h3>
            <ul>
                {items.map((item: Item, index: number) => (
                    <ItemEntry item={item} setTargetItem={updateTargetItem} setEditting={toggleEdittingState} key={index} />
                ))}
                {!adding ? !editting ? <ActionButton handler={toggleAddingState}>ADICIONAR ITEM</ActionButton> : <ItemForm setEditing={toggleEdittingState} targetItem={targetItem} /> : <ItemForm setAdding={toggleAddingState} />}
            </ul>
        </div>
    );
}