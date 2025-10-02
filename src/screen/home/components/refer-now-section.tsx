import { StyleSheet, View, Pressable } from "react-native";
import Card from "@/components/Card";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import IdentityIcon from "@assets/svg/identityIcon.svg";

export default function ReferNow() {
    return (
        <Card style={styles.card}>
            <View style={styles.container}>
                <View>
                    <ThemedText
                        color="#212121"
                        type="label"
                        fontVariant="semiBold"
                    >
                        Refer to Your Friend and Earn
                    </ThemedText>

                    <ThemedText
                        style={styles.subtitle}
                        color={Colors.regentGray}
                        type="labelMedium"
                    >
                        Earn Up to $100 For Every Referral
                    </ThemedText>

                    <Pressable style={styles.referButton}>
                        <ThemedText
                            style={styles.referButtonText}
                            color={Colors.primary}
                            fontVariant="semiBold"
                            type="labelMedium"
                        >
                            Refer Now
                        </ThemedText>
                    </Pressable>
                </View>

                <IdentityIcon />
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        paddingHorizontal: 12,
        paddingVertical: 20,
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    subtitle: {
        paddingTop: 4,
    },
    referButton: {
        marginTop: 8,
        backgroundColor: Colors.primaryTransparent,
        borderRadius: 8,
        width: 78,
        alignItems: "center",
    },
    referButtonText: {
        paddingVertical: 4,
    },
});
