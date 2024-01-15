import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore, collection } from 'firebase/firestore';
// import { addDoc } from 'firebase/firestore';

// import productos from '../src/productos';

const firebaseConfig = {
  apiKey: "AIzaSyAspIaACto_JDKC21Eoi63piwnWMxY7wNc",
  authDomain: "fir-auth-c901e.firebaseapp.com",
  projectId: "fir-auth-c901e",
  storageBucket: "fir-auth-c901e.appspot.com",
  messagingSenderId: "29568644232",
  appId: "1:29568644232:web:bdddf462e6dbb708da1b3d",
  measurementId: "G-B1N9MB3TLB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const productosRef = collection(db, 'productos');
const ordenesRef = collection(db, 'ordenes');

export const auth = getAuth(app);

// const agregarProductosAFirestore = async () => {
//   try {
//     for (const item of productos) {
//       const itemSinId = { ...item };
//       delete itemSinId.id;

//       const docRef = await addDoc(productosRef, itemSinId);
//       console.log("Documento agregado con ID:", docRef.id);
//     }
//     console.log("Todos los productos han sido agregados correctamente.");
//   } catch (error) {
//     console.error("Error al agregar productos:", error);
//   }
// };

export { getFirestore, productosRef, ordenesRef , db };
// agregarProductosAFirestore();

export default app;