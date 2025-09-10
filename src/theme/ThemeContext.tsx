import { Colors } from "@/constants/Colors";
import React, { createContext, useContext } from "react";
import { useColorScheme } from "react-native";

type ThemeType = typeof Colors.light;

const ThemeContext = createContext<ThemeType>(Colors.light);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const scheme = useColorScheme();
    const theme = scheme === "dark" ? Colors.dark : Colors.light;

    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
