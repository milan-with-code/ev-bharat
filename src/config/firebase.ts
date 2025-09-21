import { initializeApp } from "firebase/app";
import { initializeAuth, } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import * as SecureStore from "expo-secure-store";

const firebaseConfig = {
    apiKey: "AIzaSyABiVi2ADtX_39_JSy1lXnLguqoKECdi10",
    authDomain: "ev-bharat.firebaseapp.com",
    projectId: "ev-bharat",
    storageBucket: "ev-bharat.firebasestorage.app",
    messagingSenderId: "284444879080",
    appId: "1:284444879080:web:3c2bbbf7bf7597a9d1c15d",
    measurementId: "G-6HEWC13BNW"
};

const secureStorePersistence = {
    type: "LOCAL" as const,
    async getItem(key: string) {
        return SecureStore.getItemAsync(key);
    },
    async setItem(key: string, value: string) {
        return SecureStore.setItemAsync(key, value);
    },
    async removeItem(key: string) {
        return SecureStore.deleteItemAsync(key);
    },
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app);
export const db = getFirestore(app);
