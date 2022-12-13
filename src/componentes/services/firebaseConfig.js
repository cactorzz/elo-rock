import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuK0YtdcqtuwTndcFeUI-Br-Gbi4vdlQI",
  authDomain: "elo-rock.firebaseapp.com",
  projectId: "elo-rock",
  storageBucket: "elo-rock.appspot.com",
  messagingSenderId: "954816023711",
  appId: "1:954816023711:web:3817bf25bbb8578d7326aa",
  measurementId: "G-ZW61Y2MV6V"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const firestore = getFirestore(app);
