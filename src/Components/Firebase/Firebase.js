import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMowfcU1I_ZUPsyTWV1tlRDOuGdMnN8KA",
  authDomain: "moviemingle-a0f6a.firebaseapp.com",
  projectId: "moviemingle-a0f6a",
  storageBucket: "moviemingle-a0f6a.firebasestorage.app",
  messagingSenderId: "231906679066",
  appId: "1:231906679066:web:8e2a46e805d4aaa42af4a3"
};

firebase.initializeApp(firebaseConfig)

// Initialize Firestore and Authentication
const db = firebase.firestore()
const auth = firebase.auth()

export {auth}
export default db







