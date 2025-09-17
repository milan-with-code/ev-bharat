import { View, TextInput, StyleSheet } from "react-native";
import SmoothModal from "@/components/SmoothModal";
import { ThemedText } from "@/components/ThemedText";
import { Separator } from "@/components/Separator";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "@/components/Button";
import { Colors } from "@/constants/Colors";

type Props = {
    visible: boolean;
    onClose: () => void;
};

export default function VehicleNumberModal({ visible, onClose }: Props) {
    return (
        <SmoothModal visible={visible} onClose={onClose}>
            <ThemedText type="defaultSemiBold" style={styles.modalTitle}>
                Enter Vehicle Number
            </ThemedText>

            <Separator style={styles.separator} color="#ACB4B9" />

            <View style={styles.inputWrapper}>
                <ThemedText color={Colors.mako} type="labelMedium">
                    Enter Your Vehicle Number
                </ThemedText>
                <View style={styles.inputContainer}>
                    <AntDesign
                        name="car"
                        size={24}
                        color={Colors.nutralsBlack}
                        style={styles.icon}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="GJ-12-DD-0000"
                        placeholderTextColor={Colors.nutralsBlack}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </View>
            </View>

            <ThemedText color={Colors.mako} type="label" style={styles.helperText}>
                This helps us identify your vehicle during parking and charging.
            </ThemedText>

            <Button title="Submit" onPress={onClose} style={styles.submitButton} />
        </SmoothModal>
    );
}

const styles = StyleSheet.create({
    modalTitle: {
        textAlign: "center",
    },
    separator: {
        marginVertical: 16,
    },
    inputWrapper: {
        width: "100%",
        height: 56,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 8,
        paddingHorizontal: 10,
        height: 52,
        borderWidth: 1,
        borderColor: Colors.borderColor,
        marginTop: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: Colors.nutralsBlack,
        lineHeight: 22,
        fontFamily: "Outfit_400Regular",
    },
    icon: {
        marginRight: 6,
    },
    helperText: {
        marginTop: 32,
    },
    submitButton: {
        width: "100%",
        marginTop: 16,
    },
});
