import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
export const clientsList = collection(db, 'orderList'); //повертає посилання на колекцію
export const orderList = collection(db, 'orderList');

export const getClientsList = async () => {
  const clientsRef = collection(db, 'orderList');
  const querySnapshot = await getDocs(clientsRef);
  const clients = querySnapshot.docs.map((doc) => doc.data());
  return clients;
};
