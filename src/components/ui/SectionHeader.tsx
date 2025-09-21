import React from "react";
import { View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";

interface SectionHeaderProps {
    title: string;
    linkHref?: string;
    linkText?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    linkHref,
    linkText = "View All",
}) => {
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 12,
            }}
        >
            <ThemedText type="defaultSemiBold" fontVariant="semiBold">
                {title}
            </ThemedText>

            {linkHref && (
                <Link href={linkHref}>
                    <ThemedText
                        fontVariant="regular"
                        type="labelMedium"
                        color={Colors.linkView}
                    >
                        {linkText}
                    </ThemedText>
                </Link>
            )}
        </View>
    );
};

export default SectionHeader;
