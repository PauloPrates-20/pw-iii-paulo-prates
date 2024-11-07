import { revalidateList } from '../lib/actions';
import { Item } from '../lib/definitions';
import ActionButton from './ActionButton';

export default function ItemEntry({ 
    item, 
    setTargetItem,
    setEditting,
}: { 
    item: Item, 
    setTargetItem: (item: Item) => void ,
    setEditting: () => void,
}) {
    async function deleteItem() {
        const res = await fetch('http://localhost:3000/api/delete-item', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: item.id
        })
        const resJson = await res.json();

        if (!resJson.ok) {
            window.alert(resJson.errors[0]);
            return;
        }

        revalidateList();
    }

    function editItem() {
        setTargetItem(item);
        setEditting();
    }

    return (
        <li>
            <button>{item.quantity}x {item.name}</button>
            <ActionButton handler={deleteItem}>EXCLUIR</ActionButton>
            <ActionButton handler={editItem}>EDITAR</ActionButton>
        </li>
    );
}