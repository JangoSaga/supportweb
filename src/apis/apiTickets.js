import {
  collection,
  query,
  getDocs,
  where,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";

export const fetchTicketsByUser = async (userId) => {
  const q = query(collection(db, "tickets"), where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const fetchAllTickets = async () => {
  const querySnapshot = await getDocs(collection(db, "tickets"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const createTicket = async (ticketData) => {
  const docRef = await addDoc(collection(db, "tickets"), ticketData);
  return { id: docRef.id, ...ticketData };
};

export const updateTicket = async (ticketId, updatedData) => {
  const ticketRef = doc(db, "tickets", ticketId);
  await updateDoc(ticketRef, updatedData);
  return { id: ticketId, ...updatedData };
};

export const deleteTicket = async (ticketId) => {
  await deleteDoc(doc(db, "tickets", ticketId));
  return ticketId;
};
