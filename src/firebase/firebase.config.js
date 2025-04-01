import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAlWogtAksak4YYLAk7KGtM7qZz5Ydlvrg",
  authDomain: "mern-book-c9945.firebaseapp.com",
  projectId: "mern-book-c9945",
  storageBucket: "mern-book-c9945.firebasestorage.app",
  messagingSenderId: "260804805324",
  appId: "1:260804805324:web:b4ac67ed4af6bac4133869"
};

// Ensure Firebase is initialized only once
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export default app;
