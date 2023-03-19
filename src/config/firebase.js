import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBvRtnNYbvffHB9rydGz26xWkOTUj07JXU",
  authDomain: "hack-8f065.firebaseapp.com",
  projectId: "hack-8f065",
  storageBucket: "hack-8f065.appspot.com",
  messagingSenderId: "469103609263",
  appId: "1:469103609263:web:c11f775747983d85181b5a",
  measurementId: "G-M6L58XQ6D7",
  databaseURL:
    "https://console.firebase.google.com/u/0/project/hack-8f065/database/hack-8f065-default-rtdb/data/~2F",
  storageBucket:
    "https://console.firebase.google.com/project/hack-8f065/storage/hack-8f065.appspot.com/files",
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);
export { firebaseConfig, database, storage, app };
