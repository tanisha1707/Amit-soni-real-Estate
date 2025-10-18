// app/api/contact/route.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let app;
let db;

try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
} catch (error) {
  console.error('Firebase initialization error:', error);
}

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body.name || !body.email || !body.phone || !body.propertyType || !body.message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Save to Firestore
    const inquiriesCollection = collection(db, 'realEstateInquiries');
    const docRef = await addDoc(inquiriesCollection, {
      name: body.name,
      email: body.email,
      phone: body.phone,
      propertyType: body.propertyType,
      budget: body.budget || '',
      message: body.message,
      timestamp: serverTimestamp(),
      createdAt: new Date().toISOString(),
    });

    return new Response(
      JSON.stringify({ success: true, id: docRef.id }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error saving inquiry:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to save inquiry' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}