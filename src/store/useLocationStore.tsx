import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { getItem, setItem, deleteItemAsync } from "expo-secure-store";

type LocationType = {
    latitude: number;
    longitude: number;
    address?: any;
};

type LocationState = {
    location: LocationType | null;
    isLocationSetup: boolean;
    _hasHydrated: boolean;

    setLocation: (location: LocationType) => void;
    resetLocation: () => void;
    setHasHydrated: (value: boolean) => void;
};

export const useLocationStore = create(
    persist<LocationState>(
        (set) => ({
            _hasHydrated: false,
            location: null,
            isLocationSetup: false,

            setLocation: (location: LocationType) =>
                set((state) => ({
                    ...state,
                    location,
                    isLocationSetup: true,
                })),

            resetLocation: () =>
                set((state) => ({
                    ...state,
                    location: null,
                    isLocationSetup: false,
                })),

            setHasHydrated: (value: boolean) =>
                set((state: any) => ({
                    ...state,
                    _hasHydrated: value,
                })),
        }),
        {
            name: "location-store",
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
