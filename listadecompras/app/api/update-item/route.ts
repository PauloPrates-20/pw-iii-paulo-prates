import { db } from '@/app/lib/firestore-config';
import { updateDoc, doc } from 'firebase/firestore';
import { Item, ItemData } from '@/app/lib/definitions';

export async function POST(request: Request) {
    const data = await request.json() as Item;
    let ok = true;
    const errors: string[] = [];

    try {
        const docData: ItemData = {
            name: data.name,
            quantity: data.quantity,
            checked: data.checked,
        };

        await updateDoc(doc(db, 'items', data.id), { ...docData });
    } catch (error) {
        ok = false;
        errors.push('Erro ao editar item');

        return Response.json({ ok, errors });
    }

    return Response.json({ ok });
}