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
        <li className='w-full flex flex-row justify-between items-center'>
            <button className='flex flex-row justify-start items-center gap-1'>
                <span>
                    {item.quantity}x
                </span>
                <span>
                    {item.name}
                </span>
            </button>
            <div className='flex flex-row justify-between items-center gap-1'>
                <ActionButton handler={editItem}>EDITAR</ActionButton>
                <ActionButton color='rgb(189, 45, 45)' handler={deleteItem}>EXCLUIR</ActionButton>
            </div>
        </li>
    );
}