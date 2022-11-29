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

// TODO: Add SDKs for create User Document
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

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

export const db = getFirestore()
// ===============

// function to check if theres existing doc for the user auth, if its not create one
export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'usersData', userAuth.uid)
  //  the arguments ==> db -> database. usersData -> collection. userAuth -> user identifier
  console.log(userDocRef)
  //   snapshot => data (specific kind of object.)
  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot.exists())

  //? pseudo code =>
  // ** if user data exist
  // => return userDocRef
  // ** if user data not exist
  // => create/ set the document with data from userAuth in userData collection

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createDate = new Date() // when the user create account

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createDate,
      })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }
  return userDocRef

  // **** snapshot of the data collection in firebase ****
  /*  
  createDate: November 29, 2022 at 6:40:55 PM UTC+2
  displayName: "Sara J"
  email: "sara97abuawwad@gmail.com" 
  */
}
