import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCA_fHHY_U5RpOiken48Ka2-v9w3Wc3UH0",
  authDomain: "emergency-alarm-project.firebaseapp.com",
  projectId: "emergency-alarm-project",
  storageBucket: "emergency-alarm-project.appspot.com",
  messagingSenderId: "432913062035",
  appId: "1:432913062035:web:a7bf302284f71b5ffcd566"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);