import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserLocalPersistence,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export async function signup(data) {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      data?.email,
      data?.password
    );
    if (!user) throw new Error("Signup failed");

    const userData = {
      id: user.uid,
      email: user.email,
      role: "customer",
      ...data,
    };

    await setDoc(doc(db, "users", user.uid), userData);

    localStorage.setItem("user", JSON.stringify(userData));

    return userData;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function login({ email, password }) {
  try {
    await setPersistence(auth, browserLocalPersistence);

    const { user } = await signInWithEmailAndPassword(auth, email, password);
    if (!user) throw new Error("Invalid email or password");

    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (!userDoc.exists()) throw new Error("User Role not found");

    const userData = {
      id: user.uid,
      email: user.email,
      role: userDoc.data().role,
    };

    localStorage.setItem("user", JSON.stringify(userData));

    return userData;
  } catch (error) {
    console.error("Login error:", error.message);
    throw error;
  }
}

export async function logout() {
  try {
    await signOut(auth);
    localStorage.removeItem("user");
  } catch (error) {
    console.error("Logout error:", error);
  }
}

export function getCurrentUser() {
  return new Promise((resolve) => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      resolve(JSON.parse(storedUser));
    } else {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (!user) {
          resolve(null);
        } else {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (!userDoc.exists()) {
            resolve(null);
          } else {
            const userData = {
              id: user.uid,
              email: user.email,
              role: userDoc.data().role,
            };
            localStorage.setItem("user", JSON.stringify(userData));
            resolve(userData);
          }
        }
        unsubscribe(); // Clean up the listener
      });
    }
  });
}
