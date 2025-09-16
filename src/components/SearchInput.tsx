import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View, TextStyle, ViewStyle } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";

type SearchInputProps = {
    value?: string;
    onChangeText?: (text: string) => void;
    placeholder?: string;
    containerStyle?: ViewStyle;
    inputStyle?: TextStyle;
    autoFocus?: boolean;
};

export default function SearchInput({
    value,
    onChangeText,
    placeholder = "Search",
    containerStyle,
    inputStyle,
    autoFocus = false,
}: SearchInputProps) {
    const [internalValue, setInternalValue] = useState(value ?? "");

    const text = value !== undefined ? value : internalValue;
    const handleChange = (t: string) => {
        if (onChangeText) {
            onChangeText(t);
        } else {
            setInternalValue(t);
        }
    };

    return (
        <View style={[styles.container, containerStyle]}>
            <Ionicons name="search-outline" size={22} color={Colors.nutralsBlack} style={styles.icon} />

            <TextInput
                style={[styles.input, inputStyle]}
                placeholder={placeholder}
                placeholderTextColor={Colors.nutralsBlack}
                value={text}
                onChangeText={handleChange}
                autoCapitalize="none"
                autoCorrect={false}
                autoFocus={autoFocus}
            />

            {text.length > 0 && (
                <TouchableOpacity
                    onPress={() => handleChange("")}
                    activeOpacity={0.7}
                    style={styles.clearIcon}
                >
                    <Ionicons name="close-circle-outline" size={22} color={Colors.nutralsBlack} />
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.catskillWhite,
        borderRadius: 8,
        paddingHorizontal: 10,
        height: 52,
        borderWidth: 1,
        borderColor: Colors.borderColor,
    },
    icon: {
        marginRight: 6,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: Colors.nutralsBlack,
        lineHeight: 22,
        fontFamily: "Outfit_400Regular",
    },
    clearIcon: {
        marginLeft: 6,
    },
});
