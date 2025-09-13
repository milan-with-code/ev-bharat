import { Colors } from "@/constants/Colors";
import React, { useEffect, useRef, useState } from "react";
import {
    View,
    TextInput,
    StyleSheet,
    Platform,
    Keyboard,
    NativeSyntheticEvent,
    TextInputKeyPressEventData,
    Dimensions,
} from "react-native";

type Props = {
    length?: number;
    onComplete?: (code: string) => void;
    autoFocus?: boolean;
    containerStyle?: object;
    inputStyle?: object;
};

export default function OTPInput({
    length = 6,
    onComplete,
    autoFocus = true,
    containerStyle,
    inputStyle,
}: Props) {
    const [values, setValues] = useState<string[]>(Array(length).fill(""));
    const inputsRef = useRef<Array<TextInput | null>>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const screenWidth = Dimensions.get("window").width;
    const horizontalPadding = 32;
    const gap = 8;
    const availableWidth = screenWidth - horizontalPadding - (length - 1) * gap;
    const cellWidth = availableWidth / length;

    useEffect(() => {
        if (autoFocus) inputsRef.current[activeIndex]?.focus();
    }, [activeIndex, autoFocus]);

    useEffect(() => {
        const code = values.join("");
        if (values.every((v) => v !== "")) {
            onComplete?.(code);
            Keyboard.dismiss();
        }
    }, [values]);

    const setDigit = (digit: string, idx: number) => {
        const char = digit.replace(/[^0-9]/g, "").slice(-1);
        if (!char) return;

        const next = [...values];
        next[idx] = char;
        setValues(next);

        if (idx < length - 1) setActiveIndex(idx + 1);
    };

    const handleKeyPress = (
        e: NativeSyntheticEvent<TextInputKeyPressEventData>,
        idx: number
    ) => {
        if (e.nativeEvent.key === "Backspace") {
            const next = [...values];
            if (next[idx]) {
                next[idx] = "";
                setActiveIndex(idx);
            } else {
                const prevIdx = Math.max(0, idx - 1);
                next[prevIdx] = "";
                setActiveIndex(prevIdx);
            }
            setValues(next);
        }
    };

    return (
        <View style={containerStyle}>
            <View style={styles.row}>
                {Array.from({ length }).map((_, i) => {
                    const isActive = i === activeIndex;
                    const filled = values[i] !== "";

                    return (
                        <TextInput
                            key={i}
                            ref={(ref) => {
                                inputsRef.current[i] = ref;
                            }}
                            value={values[i]}
                            onChangeText={(text) => setDigit(text, i)}
                            onKeyPress={(e) => handleKeyPress(e, i)}
                            keyboardType={Platform.OS === "ios" ? "number-pad" : "numeric"}
                            returnKeyType="done"
                            maxLength={1}
                            style={[
                                styles.cell,
                                { width: cellWidth },
                                isActive
                                    ? styles.cellActive
                                    : filled
                                        ? styles.cellFilled
                                        : styles.cellEmpty,
                                inputStyle,
                            ]}
                        />
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        gap: 8,
    } as any,

    cell: {
        height: 48,
        borderRadius: 8,
        fontFamily: "Outfit_400Regular",
        fontSize: 18,
        fontWeight: "500",
        color: Colors.nutralsBlack,
        backgroundColor: "#FFFFFF",
        textAlign: "center",
    },

    cellEmpty: {
        backgroundColor: Colors.catskillWhite,
        borderWidth: 0,
    },

    cellFilled: {
        borderWidth: 1,
        borderColor: Colors.borderColor,
        backgroundColor: "#FFFFFF",
    },

    cellActive: {
        borderWidth: 1,
        borderColor: Colors.primary,
        backgroundColor: Colors.primaryTransparent,
        transform: [{ scale: 1.01 }],
    },
});
