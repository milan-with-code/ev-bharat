import React, { forwardRef, useRef } from "react";
import {
    View,
    TextInput,
    TextInputProps,
    StyleSheet,
    ViewStyle,
    TextStyle,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "./ThemedText";

export type InputProps = Omit<TextInputProps, "style"> & {
    label?: string;
    containerStyle?: ViewStyle;
    inputStyle?: TextStyle;
};

const Input = forwardRef<TextInput, InputProps>((props, ref) => {
    const { label, containerStyle, inputStyle, ...rest } = props;
    const internalRef = useRef<TextInput | null>(null);

    return (
        <View style={[styles.container, containerStyle]}>
            {label ? (
                <ThemedText style={styles.label} color={Colors.mako}>
                    {label}
                </ThemedText>
            ) : null}
            <TextInput
                ref={ref || internalRef}
                style={[styles.input, inputStyle]}
                placeholderTextColor={Colors.regentGray}
                {...rest}
            />
        </View>
    );
});

Input.displayName = "Input";

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    label: {
        marginBottom: 4,
        fontSize: 14,
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.borderColor,
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 15,
        lineHeight: 20,
        fontFamily: "Outfit_400Regular",
        color: Colors.nutralsBlack,
        backgroundColor: "white",
        height: 50,
    },
});

export default Input;
