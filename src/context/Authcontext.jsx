// import React, { createContext, useState, useContext } from 'react';
// import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
// import { auth } from '../firebaseconfig'; 


// const AuthContext = createContext();


// export function useAuth() {
//     return useContext(AuthContext);
// }


// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState("");

//     const login = async (email, password) => {
//         setLoading(true);
//         setError("");
    
//         try {
//             const userCredential = await signInWithEmailAndPassword(auth, email, password);
//             const user = userCredential.user;

//             setUser(user); 
//         } catch (err) {
//             setError("Invalid email or password. Please try again.");
//         } finally {
//             setLoading(false);
//         }
//     };
    

    
//     const logout = async () => {
//         try {
//             await signOut(auth);
//             setUser(null);
//         } catch (err) {
//             setError("Failed to log out. Please try again.");
//         }
//     };


//     const value = {
//         user,
//         login,
//         logout,
//         loading,
//         error,
//         setError,
//         setLoading
//     };

//     return (
//         <AuthContext.Provider value={value}>
//             {children}
//         </AuthContext.Provider>
//     );
// };