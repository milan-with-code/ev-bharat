import { useState } from "react";
import { PhoneAuthProvider, signInWithCredential, PhoneAuthCredential } from "firebase/auth";
import { StyleSheet, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

import BackButton from "@/components/BackButton";
import { Button } from "@/components/Button";
import ScreenWrapper from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import OTPInput from "@/screen/auth/components/OTPInput";

import { auth } from "@/config/firebase";
import { useToastStore } from "@/components/ui/Toast";
import { useAuthStore } from "@/utils/authStore";
import { useUserStore } from "@/store/useUserStore";

export default function Page() {
    const [otp, setOtp] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { setUser } = useUserStore();
    const { verificationId, phoneNumber } = useLocalSearchParams();
    const verificationIdStr = Array.isArray(verificationId) ? verificationId[0] : verificationId;

    const addToast = useToastStore((state) => state.addToast);

    const { isLocationSetup, hasCompletedVehicleSetup, logIn } = useAuthStore();

    const handleOTPComplete = (code: string) => setOtp(code);

    const redirectAfterLogin = () => {
        if (!isLocationSetup) router.replace("location");
        else if (!hasCompletedVehicleSetup) router.replace("vehicle");
        else router.replace("/(main)/(tabs)/home");
    };

    const verifyOtp = async () => {
        if (otp.length !== 6) {
            addToast({ message: "Enter 6-digit OTP", type: "warning" });
            return;
        }

        if (!verificationIdStr) {
            addToast({ message: "Missing verification ID", type: "error" });
            return;
        }

        setIsLoading(true);

        try {
            const credential: PhoneAuthCredential = PhoneAuthProvider.credential(verificationIdStr, otp);
            const userCredential = await signInWithCredential(auth, credential);

            logIn();

            const { phoneNumber } = userCredential.user;

            setUser({ phone: phoneNumber || "" });

            addToast({ message: "Login Successful!", type: "success" });

            redirectAfterLogin();
        } catch (err) {
            console.error("OTP verification error:", err);
            addToast({ message: "Invalid OTP or something went wrong", type: "error" });
        } finally {
            setIsLoading(false);
        }
    };

    const maskedPhone = phoneNumber
        ? `+91 ${phoneNumber.slice(0, 2)}XXXXX${phoneNumber.slice(-3)}`
        : "+91 XXXXX X123";

    return (
        <ScreenWrapper style={{ paddingHorizontal: 16 }}>
            <BackButton type="icon" />
            <View style={{ marginTop: 40 }}>
                <View style={{ marginBottom: 32 }}>
                    <ThemedText type="title" fontVariant="bold" style={{ marginBottom: 12 }}>
                        Verify Your Number
                    </ThemedText>
                    <ThemedText color={Colors.mako} type="defaultSemiBold">
                        We've sent a 6-digit code to your mobile number {maskedPhone}
                    </ThemedText>
                </View>

                <View style={styles.inputSection}>
                    <OTPInput
                        length={6}
                        onComplete={handleOTPComplete}
                        containerStyle={{ marginBottom: 24 }}
                    />
                    <Button
                        title="Verify"
                        variant="touchable"
                        activeOpacity={0.9}
                        onPress={verifyOtp}
                        isLoading={isLoading}
                    />
                </View>
            </View>
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    inputSection: {
        marginBottom: 32,
    },
    icon: {
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 8,
        borderRadius: 24,
    },
});
