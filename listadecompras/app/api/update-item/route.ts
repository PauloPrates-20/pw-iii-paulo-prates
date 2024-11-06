import { db } from '@/app/lib/firestore-config';
import { updateDoc, doc } from 'firebase/firestore';
import { Item, Res } from '@/app/lib/definitions';

export async function POST(request: Request) {
    const data = await request.json() as Item;
    const res: Res = { status: true, errors: [] };

    try {
        await updateDoc(doc(db, 'items', data.id), { ...data });
    } catch (error) {
        res.status = false;
        res.errors.push('Erro ao editar item');
    }

    return Response.json({ res });
}