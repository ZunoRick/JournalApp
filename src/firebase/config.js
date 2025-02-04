import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo5hb3DEWkWg5XzC374qUqHzXBSYv9OFQ",
  authDomain: "react-cursos-db244.firebaseapp.com",
  projectId: "react-cursos-db244",
  storageBucket: "react-cursos-db244.firebasestorage.app",
  messagingSenderId: "779637644101",
  appId: "1:779637644101:web:d713ec20436edd77a4fc2c"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);