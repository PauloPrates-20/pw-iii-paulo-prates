import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI8cQBv2gbeq-780KcMqI4z9dlWTaqNXg",
  authDomain: "pw-iii-joao.firebaseapp.com",
  projectId: "pw-iii-joao",
  storageBucket: "pw-iii-joao.firebasestorage.app",
  messagingSenderId: "449606875262",
  appId: "1:449606875262:web:58226d6ae0fe0577ca402f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get database
export const db = getFirestore(app);