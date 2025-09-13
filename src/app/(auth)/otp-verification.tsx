import BackButton from "@/components/BackButton";
import { Button } from "@/components/Button";
import ScreenWrapper from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import OTPInput from "@/screen/auth/components/OTPInput";
import { useRouter } from "expo-router";
import { Alert, StyleSheet, View } from "react-native";

export default function Page() {
    const router = useRouter();
    const handleOTPComplete = (code: string) => {
        Alert.alert("OTP Entered", code);
    };
    return (
        <ScreenWrapper>
            <BackButton />
            <View style={{ marginTop: 40 }}>
                <View style={{ marginBottom: 32 }}>
                    <ThemedText type="title" fontVariant="bold" style={{ marginBottom: 12 }}>
                        Verify Your Number
                    </ThemedText>
                    <ThemedText color={Colors.mako} type="defaultSemiBold">
                        We've sent a 6-digit code to your mobile number +91 XXXXX X123
                    </ThemedText>
                </View>
                <View style={styles.inputSection}>
                    <OTPInput
                        length={6}
                        onComplete={handleOTPComplete}
                        containerStyle={{ marginBottom: 24 }}
                    />
                    <Button title="Verify" variant="touchable" activeOpacity={0.9} onPress={() => router.push("(auth)/otp-verification")} />
                </View>
            </View>
        </ScreenWrapper>
    )
}


const styles = StyleSheet.create({
    inputSection: {
        marginBottom: 32,
    }
})
