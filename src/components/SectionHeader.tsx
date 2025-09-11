import { View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "./ThemedText";

type SectionHeaderProps = {
    title: string;
    link?: string;
    linkLabel?: string;
};

export function SectionHeader({ title, link, linkLabel = "View All" }: SectionHeaderProps) {
    return (
        <View style={styles.container}>
            <ThemedText type="defaultSemiBold" fontVariant="semiBold">
                {title}
            </ThemedText>

            {link && (
                <Link href={link}>
                    <ThemedText
                        fontVariant="regular"
                        type="labelMedium"
                        color={Colors.linkView}
                    >
                        {linkLabel}
                    </ThemedText>
                </Link>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12,
    },
});
