// lib/auth.js
import bcrypt from "bcryptjs";
import { db } from "./firebase.js";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";

// Hash password
export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(12);
  return await bcrypt.hash(password, salt);
};

// Verify password
export const verifyPassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

// Get user by email
export const getUserByEmail = async (email) => {
  try {
    const usersCollection = collection(db, "users");
    const q = query(usersCollection, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return null;
    }

    const userDoc = querySnapshot.docs[0];
    return {
      id: userDoc.id,
      ...userDoc.data(),
    };
  } catch (error) {
    console.error("Error getting user by email:", error);
    throw error;
  }
};

// Create new user
export const createUser = async (userData) => {
  try {
    const { email, password, role, name } = userData;

    // Check if user already exists
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      throw new Error("User already exists");
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user document
    const usersCollection = collection(db, "users");
    const docRef = await addDoc(usersCollection, {
      email: email,
      password: hashedPassword,
      role: role,
      name: name,
      createdAt: new Date().toISOString(),
      isActive: true,
    });

    return {
      id: docRef.id,
      email,
      role,
      name,
    };
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

// Validate user credentials
export const validateUser = async (email, password, role) => {
  try {
    const user = await getUserByEmail(email);

    if (!user) {
      return { success: false, message: "User not found" };
    }

    if (user.role !== role) {
      return { success: false, message: "Invalid role for this user" };
    }

    if (!user.isActive) {
      return { success: false, message: "User account is inactive" };
    }

    const isPasswordValid = await verifyPassword(password, user.password);

    if (!isPasswordValid) {
      return { success: false, message: "Invalid password" };
    }

    return {
      success: true,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        name: user.name,
      },
    };
  } catch (error) {
    console.error("Error validating user:", error);
    return { success: false, message: "Authentication failed" };
  }
};
