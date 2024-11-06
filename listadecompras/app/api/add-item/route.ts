import { db } from '@/app/lib/firestore-config';
import { ItemData, Res } from '@/app/lib/definitions';
import { addDoc, collection } from 'firebase/firestore';

export async function POST(request: Request) {
    const data = await request.json() as ItemData;
    const res: Res = { status: true, errors: [] };

    try {
        await addDoc(collection(db, 'items'), data);
    } catch (error) {
        res.status = false;
        res.errors.push('Erro ao inserir item no banco de dados');
    }

    return Response.json({ res });
}