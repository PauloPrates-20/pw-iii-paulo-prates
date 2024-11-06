import { db } from '@/app/lib/firestore-config';
import { deleteDoc, doc } from 'firebase/firestore';
import { Res } from '@/app/lib/definitions';

export async function POST(request: Request) {
    const docId = await request.text();
    const res: Res = { status: true, errors: [] };

    try {
        await deleteDoc(doc(db, 'items', docId));
    } catch (error) {
        res.status = false;
        res.errors.push('Erro ao deletar item');
    }

    return Response.json({ res });
}