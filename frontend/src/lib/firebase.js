import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'
import { getFirestore, collection, addDoc, query, where, orderBy, limit, getDocs } from 'firebase/firestore'

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcldB8xWIk855fUS7kbLpO-6x_B12pQ8g",
  authDomain: "lyra-ai-4a63d.firebaseapp.com",
  projectId: "lyra-ai-4a63d",
  storageBucket: "lyra-ai-4a63d.firebasestorage.app",
  messagingSenderId: "626872487812",
  appId: "1:626872487812:web:a53ad75175a2704d8517d1"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export const getCurrentUser = async () => auth.currentUser

export const signUp = async (email, password) => {
  try {
    const { createUserWithEmailAndPassword } = await import('firebase/auth')
    const result = await createUserWithEmailAndPassword(auth, email, password)
    return { user: result.user, error: null }
  } catch (err) {
    return { user: null, error: err }
  }
}

export const signIn = async (email, password) => {
  try {
    const { signInWithEmailAndPassword } = await import('firebase/auth')
    const result = await signInWithEmailAndPassword(auth, email, password)
    return { user: result.user, error: null }
  } catch (err) {
    return { user: null, error: err }
  }
}

export const signOut = async () => {
  try {
    const { signOut: firebaseSignOut } = await import('firebase/auth')
    await firebaseSignOut(auth)
    return { error: null }
  } catch (err) {
    return { error: err }
  }
}

export const onAuthStateChange = (callback) => {
  return onAuthStateChanged(auth, callback)
}

// Firestore helpers
export const saveMoodEntry = async (userId, moodScore, note) => {
  await addDoc(collection(db, 'mood_entries'), {
    userId,
    moodScore,
    note: note || null,
    createdAt: new Date().toISOString()
  })
}

export const getMoodEntries = async (userId, limitCount = 10) => {
  const q = query(
    collection(db, 'mood_entries'),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc'),
    limit(limitCount)
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

export const saveChatMessage = async (userId, role, content) => {
  await addDoc(collection(db, 'chat_messages'), {
    userId,
    role,
    content,
    createdAt: new Date().toISOString()
  })
}

export const getChatMessages = async (userId, limitCount = 20) => {
  const q = query(
    collection(db, 'chat_messages'),
    where('userId', '==', userId),
    orderBy('createdAt', 'asc'),
    limit(limitCount)
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

export const saveCheckIn = async (userId) => {
  await addDoc(collection(db, 'check_ins'), {
    userId,
    completedAt: new Date().toISOString()
  })
}

export { db }