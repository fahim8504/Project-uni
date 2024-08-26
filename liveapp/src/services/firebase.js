import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB-qNdBkOl9jR3whwWVh2w_h41jynd0-Y0",
  authDomain: "unify-918e7.firebaseapp.com",
  projectId: "unify-918e7",
  storageBucket: "unify-918e7.appspot.com",
  messagingSenderId: "1074952331394",
  appId: "1:1074952331394:web:fafcad5572e05ea9e9d49b",
  measurementId: "G-TV141TBVWW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const login = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const register = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
