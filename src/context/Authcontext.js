// import React, { createContext, useState, useContext } from 'react';
// import { signInWithEmailAndPassword } from 'firebase/auth';  
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
//             setUser(userCredential.user);  
//         } catch (err) {
//             setError("Invalid email or password");
//         } finally {
//             setLoading(false);
//         }
//     };

//     const logout = () => {
//         setUser(null);
//     };

//     return (
//         <AuthContext.Provider value={{ user, login, logout, loading, error }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };
