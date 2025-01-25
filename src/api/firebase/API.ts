import { collection, getDocs } from 'firebase/firestore';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { db, auth } from './firebase';
import { userCredentialsEmail } from './helper';

export const clientsList = collection(db, 'orderList'); //повертає посилання на колекцію
export const orderList = collection(db, 'orderList');

export const getClientsList = async () => {
  const clientsRef = collection(db, 'orderList');
  const querySnapshot = await getDocs(clientsRef);
  const clients = querySnapshot.docs.map((doc) => doc.data());
  return clients;
};

export const getOrdersList = async () => {
  const ordersRef = collection(db, 'orderList');
  const querySnapshot = await getDocs(ordersRef);
  const orders = querySnapshot.docs.map((doc) => doc.data());
  return orders;
};

// export const createUserEmailAndPassword = async ({email, password}: userCredentialsEmail) => {
//   debugger
//   await createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//       // Signed up
//       console.log(userCredential)
//       const user = userCredential.user;
//       return user;
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // ..
//     });
// };

export const createUserEmailAndPassword = async ({
  email,
  password,
}: userCredentialsEmail) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
    const user = userCredential.user;
    console.log(user);
    return user; // Повертає користувача
  } catch (error: any) {
    console.error('Error creating user:', error.code, error.message);
    throw new Error(error.message);
  }
};

export const logInUserEmailAndPassword = async ({
  email,
  password,
}: userCredentialsEmail) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(user);
    return user;
  } catch (error) {
    console.error('Error during signInWithEmailAndPassword:', error);
    return null; // Якщо сталася помилка, повертаємо null
  }
};


onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
