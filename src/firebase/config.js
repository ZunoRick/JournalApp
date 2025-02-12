import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Dev/Prov
// const firebaseConfig = {
//   apiKey: "AIzaSyCo5hb3DEWkWg5XzC374qUqHzXBSYv9OFQ",
//   authDomain: "react-cursos-db244.firebaseapp.com",
//   projectId: "react-cursos-db244",
//   storageBucket: "react-cursos-db244.firebasestorage.app",
//   messagingSenderId: "779637644101",
//   appId: "1:779637644101:web:d713ec20436edd77a4fc2c"
// };

// Testing
const firebaseConfig = {
  apiKey: "AIzaSyBHwVF8XFNjzETrOSg-8a-n-ELomDYA4QI",
  authDomain: "tracker-4f4a2.firebaseapp.com",
  projectId: "tracker-4f4a2",
  storageBucket: "tracker-4f4a2.firebasestorage.app",
  messagingSenderId: "855686563088",
  appId: "1:855686563088:web:b7615afe4243f4bc919195"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);