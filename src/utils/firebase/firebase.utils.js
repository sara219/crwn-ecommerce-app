// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

// TODO: Add SDKs for Firebase products that will be use
import {
  // to create a auth instance as well
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAM5xt-GSFnImE1ZqXMSBM7VjWaoUEpWh8',
  authDomain: 'crwn-db0-99f50.firebaseapp.com',
  projectId: 'crwn-db0-99f50',
  storageBucket: 'crwn-db0-99f50.appspot.com',
  messagingSenderId: '536248071393',
  appId: '1:536248071393:web:b2dcfcd69799d8b523b3a0',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

// Initialize Provider using Google auth
// ==> GoogleAuthProvider is class that we get from Firebase Authentication and this is connected to Google auth itself., we may need diff implementation
const provider = new GoogleAuthProvider()
// how Google auth should behave! => every time somebody interacts with the provider,always force them to select an account.
provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
