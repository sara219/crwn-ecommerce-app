import { initializeApp } from 'firebase/app'

// TODO: Add SDKs for Firebase products that will be use
import {
  // to create a auth instance as well
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

// TODO: Add SDKs for create User Document
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore'

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
const googleProvider = new GoogleAuthProvider()
// how Google auth should behave! => every time somebody interacts with the provider,always force them to select an account.
googleProvider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

// ===============

// TODO: Interface Layers [Helper Functions]

//!! =================  function to check if theres existing doc for the user auth, if its not create one

export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {
  if (!userAuth) return

  const userDocRef = doc(db, 'usersData', userAuth.uid)
  //  the arguments ==> db -> database. usersData -> collection. userAuth -> user identifier
  //   snapshot => data (specific kind of object.)
  const userSnapshot = await getDoc(userDocRef)

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
        ...additionalInfo,
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

//!! ================= create account using email and password

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  return createUserWithEmailAndPassword(auth, email, password)
}

//!! ================= Sign with email and password

export const signIneAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  return signInWithEmailAndPassword(auth, email, password)
}

//!! ================= SignOut

export const signOutUser = async () => await signOut(auth)

//!! ================= auth state change (observer listener)

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback)

//!! =================  function to create a collection on firebase of object the held the data with diff categories

export const addCollectionAndDoc = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey)

  // * using Batch to add all of the object to collection with successful transaction
  const batch = writeBatch(db)

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()
  console.log('DONE')
}

//!! =================  Get Products + Categories From Firestore

export const getCategoriesAndDoc = async () => {
  const collectionRef = collection(db, 'categories')
  const queryCollection = query(collectionRef)

  // get docs to fetch snapshots the we want:
  const querySnapShot = await getDocs(queryCollection)
  // querySnapShot.docs => give an array with all of the docs |
  // console.log(querySnapShot.docs);
  // reducing over [querySnapShot.docs] in order to finally end up with an object [categoryMap]
  const categoryMap = querySnapShot.docs.reduce((accumulator, docSnapShot) => {
    const { title, items } = docSnapShot.data()
    accumulator[title.toLowerCase()] = items
    return accumulator
  }, {})
  return categoryMap
}
