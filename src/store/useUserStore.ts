import { deleteItemAsync, getItem, setItem } from "expo-secure-store";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type UserDetails = {
    name?: string;
    phone?: string;
    email?: string;
    profilePictureUrl?: string;
    dateOfBirth?: string;
};

type UserStore = {
    user: UserDetails | null;
    setUser: (user: UserDetails) => void;
    clearUser: () => void;
    setHasHydrated: (value: boolean) => void;
};

export const useUserStore = create(
    persist<UserStore>(
        (set) => ({
            user: null,
            setUser: (user) => set({ user }),
            clearUser: () => set({ user: null }),
            setHasHydrated: (value: boolean) =>
                set((state) => ({ ...state, _hasHydrated: value })),
        }),
        {
            name: "user-store",
            storage: createJSONStorage(() => ({
                setItem,
                getItem,
                removeItem: deleteItemAsync,
            })),
            onRehydrateStorage(state) {
                return (state) => {
                    state?.setHasHydrated(true);
                };
            },
        }
    )
);
