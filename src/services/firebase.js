import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { getDatabase, ref } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyCIxlYDvTwQQ47OLbKt-xqjM-uddLBsLhY",
  authDomain: "my-first-project-gb-bc506.firebaseapp.com",
  projectId: "my-first-project-gb-bc506",
  storageBucket: "my-first-project-gb-bc506.appspot.com",
  messagingSenderId: "488964890930",
  appId: "1:488964890930:web:1fe7df96ccee71b962772b"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)

export const signUp = async (email, password) => await createUserWithEmailAndPassword(firebaseAuth, email, password)
export const signIn = async (email, password) => await signInWithEmailAndPassword(firebaseAuth, email, password )
export const logOut = async () => await signOut(firebaseAuth)

const db = getDatabase(app)

export const userRef = ref(db, 'user')
export const messagesRef = ref(db, 'messages')

export const getChatById = (chatId) => ref(db, `messages/${chatId}`)
// export const getMessageById = (chatId) => ref(db, `messages/${chatId}/message`) 
export const getMessageListById = (chatId) => ref(db, `messages/${chatId}/messageList`)
