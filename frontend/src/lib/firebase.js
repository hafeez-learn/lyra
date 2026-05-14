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
const app = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const db = firebase.firestore()

// MiniMax API key (server-side proxy would be better, but for demo we use direct call)
const MINIMAX_API_KEY = '' // Will use Hermes agent's API key

export const getCurrentUser = async () => {
  return auth.currentUser
}

export const signUp = async (email, password) => {
  try {
    const result = await auth.createUserWithEmailAndPassword(email, password)
    // Create user profile in Firestore
    await db.collection('profiles').doc(result.user.uid).set({
      email: email,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    return { user: result.user, error: null }
  } catch (err) {
    return { user: null, error: err }
  }
}

export const signIn = async (email, password) => {
  try {
    const result = await auth.signInWithEmailAndPassword(email, password)
    return { user: result.user, error: null }
  } catch (err) {
    return { user: null, error: err }
  }
}

export const signOut = async () => {
  try {
    await auth.signOut()
    return { error: null }
  } catch (err) {
    return { error: err }
  }
}

export const onAuthStateChange = (callback) => {
  return auth.onAuthStateChanged(callback)
}

// Firestore helpers
export const saveMoodEntry = async (userId, moodScore, note) => {
  await db.collection('mood_entries').add({
    userId,
    moodScore,
    note: note || null,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  })
}

export const getMoodEntries = async (userId, limit = 10) => {
  const snapshot = await db.collection('mood_entries')
    .where('userId', '==', userId)
    .orderBy('createdAt', 'desc')
    .limit(limit)
    .get()
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

export const saveChatMessage = async (userId, role, content) => {
  await db.collection('chat_messages').add({
    userId,
    role,
    content,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  })
}

export const getChatMessages = async (userId, limit = 20) => {
  const snapshot = await db.collection('chat_messages')
    .where('userId', '==', userId)
    .orderBy('createdAt', 'asc')
    .limit(limit)
    .get()
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

export const saveCheckIn = async (userId) => {
  await db.collection('check_ins').add({
    userId,
    completedAt: firebase.firestore.FieldValue.serverTimestamp()
  })
}