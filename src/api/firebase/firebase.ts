import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth, RecaptchaVerifier } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAKutrkgTz3FJ-P7pUqLOBW_4Kknf6LvJs',
  authDomain: 'atelierclothingrepair.firebaseapp.com',
  projectId: 'atelierclothingrepair',
  storageBucket: 'atelierclothingrepair.firebasestorage.app',
  messagingSenderId: '432849750130',
  appId: '1:432849750130:web:025a4d3e3fb53f98b79aeb',
  measurementId: 'G-67C2MGHYBB',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//initialize auth
export const auth = getAuth(app);

declare global {
  interface Window {
    recaptchaVerifier: import("firebase/auth").RecaptchaVerifier;
  }
}


auth.useDeviceLanguage();
window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
  'size': 'invisible',
  'callback': (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    onSignInSubmit();
  }
});
