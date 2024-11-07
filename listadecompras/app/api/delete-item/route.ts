import { db } from '@/app/lib/firestore-config';
import { deleteDoc, doc } from 'firebase/firestore';

export async function POST(request: Request) {
    const docId = await request.text();
    let ok = true;
    const errors: string[] = [];

    try {
        await deleteDoc(doc(db, 'items', docId));
    } catch (error) {
        ok = false;
        errors.push('Erro ao deletar item');

        return Response.json({ ok, errors });
    }

    return Response.json({ ok });
}