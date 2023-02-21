
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAr6pNE3rcovrrwxJuBgDEvpJob-r_hwnM",
  authDomain: "percubateristas.firebaseapp.com",
  databaseURL: "https://percubateristas-default-rtdb.firebaseio.com",
  projectId: "percubateristas",
  storageBucket: "percubateristas.appspot.com",
  messagingSenderId: "668127969854",
  appId: "1:668127969854:web:ef32029aff1b2ea573476f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);