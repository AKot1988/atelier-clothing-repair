import { collection, getDocs } from 'firebase/firestore';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { db, auth } from './firebase';
import {userCredentialsEmail} from './helper';

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

export const createUserEmailAndPassword = async ({email, password}: userCredentialsEmail) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      return user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

export const logInUserEmailAndPassword = async ({email, password}: userCredentialsEmail) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log('SIGN IN WITH signInWithEmailAndPassword SUCCESS');
      console.log(user);
      return user;
      // ...
    })
    .catch((error) => {
      const user = null;
      const errorCode = error.code;
      const errorMessage = error.message;
      return user;
    });
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
