import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import * as SecureStore from "expo-secure-store";


type UserState = {
    isLoggedIn: boolean,
    shouldCreateAccount: boolean
    hasCompletedOnboarding: boolean
    _hasHydrated: false,
    logIn: () => void
    logOut: () => void
    completedOnboarding: () => void
    resetOnboarding: () => void
    setHasHydrated: (value: boolean) => void,
    isLocationSetup: boolean,
    completedLocationSetup: () => void
    hasCompletedVehicleSetup: boolean,
    completedVehicleSetup: () => void,
}

export const useAuthStore = create(
    persist<UserState>((set) => ({
        _hasHydrated: false,
        isLoggedIn: false,
        shouldCreateAccount: false,
        hasCompletedOnboarding: false,
        isLocationSetup: false,
        hasCompletedVehicleSetup: false,

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
        },
        completedLocationSetup: () => {
            set((state) => {
                return {
                    ...state,
                    isLocationSetup: true
                }
            })
        },
        setHasHydrated: (value: boolean) => {
            set((state: any) => {
                return {
                    ...state,
                    _hasHydrated: value,
                };
            });
        },
        completedVehicleSetup: () => {
            set((state) => {
                return {
                    ...state,
                    hasCompletedVehicleSetup: true
                }
            })
        }
    }), {
        "name": "auth-store",
        storage: createJSONStorage(() => ({
            getItem: SecureStore.getItemAsync,
            setItem: SecureStore.setItemAsync,
            removeItem: SecureStore.deleteItemAsync,
        })),
        onRehydrateStorage: () => (state) => {
            if (state?.setHasHydrated) {
                state.setHasHydrated(true);
            }
        }
    })
)
