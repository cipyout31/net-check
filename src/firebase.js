import { initializeApp } from "firebase/app";
import { 
  createUserWithEmailAndPassword, 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut } from "firebase/auth";
import { 
  addDoc, 
  collection, 
  getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyAnC0foJXtFNw6b5TXrVLilaO10Xjk6vXE",
  authDomain: "netflix-1b7cf.firebaseapp.com",
  projectId: "netflix-1b7cf",
  storageBucket: "netflix-1b7cf.appspot.com",
  messagingSenderId: "168139893160",
  appId: "1:168139893160:web:52471dc0bc5837de7d559d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
  try {
    const res = await createUserWithEmailAndPassword(auth,email,password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.id,
      name,
      autprovider: "local",
      email,
    })
  } catch (error) {
    console.log(error);
    //alert(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

const login = async (email, password) =>{
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    console.log(error);
    //alert(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

const logout = ()=>{
  signOut(auth);
}

export { auth,db,login,signup,logout}