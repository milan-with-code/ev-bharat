import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { getItem, setItem, deleteItemAsync } from "expo-secure-store"


type UserState = {
    isLoggedIn: boolean,
    shouldCreateAccount: boolean
    hasCompletedOnboarding: boolean
    logIn: () => void
    logOut: () => void
    completedOnboarding: () => void
    resetOnboarding: () => void
}

export const useAuthStore = create(
    persist<UserState>((set) => ({
        isLoggedIn: false,
        shouldCreateAccount: false,
        hasCompletedOnboarding: false,

        logIn: () => {
            set((state) => {
                return (
                    {
                        ...state,
                        isLoggedIn: true
                    }
                )
            })
        },
        logOut: () => {
            set((state) => {
                return (
                    {
                        ...state,
                        isLoggedIn: false
                    }
                )
            })
        },
        completedOnboarding: () => {
            set((state) => {
                return (
                    {
                        ...state,
                        hasCompletedOnboarding: true
                    }
                )
            })
        },
        resetOnboarding: () => {
            set((state) => {
                return (
                    {
                        ...state,
                        hasCompletedOnboarding: false
                    }
                )
            })
        }
    }), {
        "name": "auth-store",
        storage: createJSONStorage(() => ({
            setItem,
            getItem,
            removeItem: deleteItemAsync
        }))
    })
)
