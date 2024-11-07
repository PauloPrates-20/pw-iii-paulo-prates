import { db } from '@/app/lib/firestore-config';
import { ItemData } from '@/app/lib/definitions';
import { addDoc, collection } from 'firebase/firestore';

export async function POST(request: Request) {
    const data = await request.json() as ItemData;
    let ok = true;
    const errors: string[] = [];

    try {
        await addDoc(collection(db, 'items'), data);
    } catch (error) {
        ok = false;
        errors.push('Erro ao inserir item no banco de dados');

        return Response.json({ ok, errors })
    }

    return Response.json({ ok });
}