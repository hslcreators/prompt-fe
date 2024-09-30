
import { create } from "zustand";

const root = import.meta.env.VITE_ROOT_URI
const emailApiKey = import.meta.env.VITE_EMAILAPI
// const root = `http://192.168.254.235:8000/api/v1`

const useAuthStore = create((set) => ({
    token: JSON.parse(localStorage.getItem('promptAuth'))? JSON.parse(localStorage.getItem('promptAuth')).authToken : false,
    updateToken: (data) => set((state) => ({ token: data })),
    user: JSON.parse(localStorage.getItem('promptAuth'))? JSON.parse(localStorage.getItem('promptAuth')).user : false,
    updateUser: (data) => set((state) => ({ user: data })),
    isVendor: JSON.parse(localStorage.getItem('promptAuth'))? JSON.parse(localStorage.getItem('promptAuth')).isVendor : false,
    updateIsVendor: (data) => set((state) => ({ isVendor: data }))
}))




//zustand store for handling auth errors
const useAuthErrorsStore = create((set) => ({
    error: false,
    setError: (data) => set((state) => ({ error: data }))
}))

export {
    useAuthStore,
    useAuthErrorsStore,
    root,
    emailApiKey
}