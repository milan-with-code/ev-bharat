import { Colors } from "@/constants/Colors";
import { Tabs } from "expo-router";
import { Platform } from "react-native";
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// import your SVGs as React components
import HomeIcon from "@assets/svg/home-2.svg";
import MapIcon from "@assets/svg/map.svg";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: Colors.regentGray,
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "600",
                    fontFamily: "Outfit_400Regular",
                    letterSpacing: 0.4,
                    lineHeight: 16
                },
                tabBarStyle: Platform.select({
                    ios: {
                        position: "absolute",
                    },
                }),

            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <HomeIcon width={24} height={24} fill={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="map-view"
                options={{
                    title: "Map View",
                    tabBarIcon: () => (
                        <MapIcon width={24} height={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="bookings"
                options={{
                    title: "Bookings",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="ticket-confirmation-outline" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="wallet"
                options={{
                    title: "Wallet",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="wallet-outline" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="user" size={24} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
