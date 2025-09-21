import React from "react";
import { View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { useUserStore } from "@/store/useUserStore";

export default function AppHeader() {
    const { user } = useUserStore()
    return (
        <View
            style={{
                padding: 16,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "white",
            }}
        >
            <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
                <View style={{ width: 48, height: 48 }}>
                    <Image
                        source={{ uri: user?.profilePictureUrl }}
                        style={{
                            borderColor: Colors.regentGray,
                            borderWidth: 1,
                            width: "100%",
                            height: "100%",
                            borderRadius: 999,
                        }}
                    />
                </View>
                <View>
                    <ThemedText
                        color={Colors.borderColor}
                        style={{ fontSize: 16, fontFamily: "Outfit_500Medium" }}
                    >
                        Hello 👋
                    </ThemedText>
                    <ThemedText
                        color="#212121"
                        style={{ paddingTop: 2, fontSize: 20, fontFamily: "Outfit_700Bold" }}
                    >
                        {user?.name || "N/A"}
                    </ThemedText>
                </View>
            </View>

            {/* Right Section: Icons */}
            <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
                <Ionicons name="search-outline" size={24} color="black" />
                <Ionicons name="notifications-outline" size={24} color="black" />
            </View>
        </View>
    );
};

