import { create } from "zustand";

export type ToastType = "success" | "error" | "info" | "custom" | "warning";

export type ToastItemType = {
    id: string;
    message: string;
    type?: ToastType;
    duration?: number;
    onPress?: () => void;
};

type ToastState = {
    toasts: ToastItemType[];
    addToast: (toast: Omit<ToastItemType, "id">) => void;
    removeToast: (id: string) => void;
};

export const useToastStore = create<ToastState>((set) => ({
    toasts: [],
    addToast: (toast) =>
        set((state) => ({
            toasts: [...state.toasts, { ...toast, id: Date.now().toString() }],
        })),
    removeToast: (id) =>
        set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) })),
}));
