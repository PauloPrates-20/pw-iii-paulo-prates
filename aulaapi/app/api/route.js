import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// Firebase app config
const firebaseConfig = {
    apiKey: "AIzaSyDyd1DS1nEvqtNTlTHkZV4MHPgZeMIX5pU",
    authDomain: "terrasagrada-site.firebaseapp.com",
    projectId: "terrasagrada-site",
    storageBucket: "terrasagrada-site.appspot.com",
    messagingSenderId: "1030118386482",
    appId: "1:1030118386482:web:846c9aafc3fa444efa852b"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const dynamic = 'force-dynamic';

export async function GET() {
    const querySnapshot = await getDocs(collection(db, 'itensMagicos'));
    const data = [];

    querySnapshot.forEach(item => {
        data.push({ id: item.id, info: item.data() });
    });

    return Response.json(data);
}