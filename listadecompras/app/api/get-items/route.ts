import { db } from '@/app/lib/firestore-config';
import { getDocs, collection } from 'firebase/firestore';
import { Item } from '@/app/lib/definitions';

export async function GET() {
    const data: Item[] = [];
    let ok = true;
    const errors: string[] = [];

    try {
        const querySnapshot = await getDocs(collection(db, 'items'));

        querySnapshot.forEach(doc => {
            const docData = doc.data();

            const item: Item = {
                id: doc.id,
                name: docData.name,
                quantity: docData.quantity,
                checked: docData.checked,
            };

            data.push(item);
        });
    } catch (error) {
        ok = false;
        errors.push('Erro ao ler itens da lista');

        return Response.json({ ok, errors });
    }

    return Response.json({ ok, data });
}