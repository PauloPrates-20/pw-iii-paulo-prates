import { Item } from '../lib/definitions';
import ActionButton from './ActionButton';

export default function ItemEntry({ item }: { item: Item }) {
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

        window.alert('Item excluido com sucesso');
    }

    return (
        <li>
            <button>{item.quantity} {item.name}</button>
            <ActionButton text='EXCLUIR' handler={deleteItem} />
        </li>
    );
}