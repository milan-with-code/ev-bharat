import * as SecureStore from "expo-secure-store";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID,
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

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(secureStorePersistence)
});
const db = getFirestore(app);

export { app, auth, db };
