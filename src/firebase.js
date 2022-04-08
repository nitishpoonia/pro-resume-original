// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrNNiypm-lCUVXM-jAi6GphkJcmlPioks",
  authDomain: "resume-builder-and-analyzer.firebaseapp.com",
  projectId: "resume-builder-and-analyzer",
  storageBucket: "resume-builder-and-analyzer.appspot.com",
  messagingSenderId: "137339691779",
  appId: "1:137339691779:web:f47f9f0e935996cd8fbf36",
  measurementId: "G-RG202FV17V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// connectAuthEmulator(auth, "http://localhost:9099");
export default app;
