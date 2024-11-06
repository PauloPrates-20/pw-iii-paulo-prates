import { db } from '@/app/lib/firestore-config';
import { getDocs, collection } from 'firebase/firestore';
import { Item, Res } from '@/app/lib/definitions';

export async function GET() {
    const items: Item[] = [];
    const res: Res = { status: true, errors: [] };

    try {
        const querySnapshot = await getDocs(collection(db, 'items'));

        querySnapshot.forEach(doc => {
            const data = doc.data();

            const item: Item = {
                id: doc.id,
                name: data.name,
                quantity: data.quantity,
                checked: data.checked,
            };

            items.push(item);
        });
    } catch (error) {
        res.status = false;
        res.errors.push('Erro ao ler itens da lista');
    }

    return Response.json({ res, items });
}