import { Button } from "@/components/Button";
import ScreenWrapper from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

export default function PhoneAuthentication() {
    const router = useRouter();
    const [phoneNumber, setPhoneNumber] = useState("");

    return (
        <ScreenWrapper>
            <View style={styles.content}>
                <View style={{ marginBottom: 32 }}>
                    <ThemedText type="title" fontVariant="bold" style={{ marginBottom: 12 }}>
                        One App. Total Control.
                    </ThemedText>
                    <ThemedText color={Colors.mako} type="defaultSemiBold">
                        Manage all your EV needs — from charging to parking — in one smooth experience
                    </ThemedText>
                </View>

                <View style={styles.inputSection}>
                    <View style={{ marginBottom: 24 }}>
                        <ThemedText color={Colors.sharkNew} type="labelMedium" style={{ paddingBottom: 4 }}>
                            Enter Your Mobile Number
                        </ThemedText>
                        <View style={styles.phoneInputWrapper}>
                            <Ionicons name="call-outline" size={20} color="#212121" style={styles.phoneIcon} />
                            <TextInput
                                style={styles.phoneInput}
                                value={phoneNumber}
                                onChangeText={(text) => setPhoneNumber(text)}
                                placeholder="Enter mobile number"
                                keyboardType="phone-pad"
                                maxLength={10}
                            />
                        </View>
                    </View>
                    <Button title="Continue" variant="touchable" activeOpacity={0.9} onPress={() => router.push("(auth)/otp-verification")} />
                </View>

                <View style={styles.dividerContainer}>
                    <View style={styles.dividerLine} />
                    <ThemedText type="labelMedium">Or Continue With</ThemedText>
                    <View style={styles.dividerLine} />
                </View>

                <View style={styles.socialContainer}>
                    <TouchableOpacity style={styles.socialButton}>
                        <Ionicons name="logo-facebook" size={24} color="#1877F2" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.socialButton}>
                        <Ionicons name="logo-google" size={24} color="#4285F4" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.socialButton}>
                        <Ionicons name="logo-apple" size={24} color="#000" />
                    </TouchableOpacity>
                </View>
            </View>
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        marginTop: 40
    },
    inputSection: {
        marginBottom: 32,
    },
    phoneInputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.catskillWhite,
        borderRadius: 8,
        paddingHorizontal: 12,
    },
    phoneIcon: {
        marginRight: 10,
    },
    phoneInput: {
        flex: 1,
        fontSize: 14,
        color: Colors.nutralsBlack,
        fontFamily: "Outfit_400Regular",
        fontWeight: "400",
        paddingVertical: 16,
    },
    dividerContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },
    dividerLine: {
        flex: 1,
        borderBottomWidth: 2,
        borderStyle: "dotted",
        borderColor: "#ACB4B9",
        marginHorizontal: 8,
    },
    socialContainer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 24,
        paddingVertical: 24,
    },
    socialButton: {
        width: 88,
        height: 60,
        borderRadius: 16,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: Colors.borderColor,
    },
});
