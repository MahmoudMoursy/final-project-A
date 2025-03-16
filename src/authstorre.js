import { create } from "zustand";
import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "./firebaseconfig";

export const useAuth = create((set) => ({
    token: "",
    user: null,
    loading: false,
   
      signUp: async (data) => {
        set({ loading: true });
        try {
            const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
            const token = await res.user.getIdToken();
            set({ user: res.user, token, loading: false });
            return res.user; 
        } catch (error) {
            set({ loading: false });
            throw error; 
        }
    },

   
}));
