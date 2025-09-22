import { Colors } from "@/constants/Colors";
import { Tabs } from "expo-router";
import { TabBarIcon } from "@/components/TabBarIcon";

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
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon
                            focused={focused}
                            activeUri="https://i.ibb.co/bMKWsHPS/home-2.png"
                            inactiveUri="https://i.ibb.co/bj52YxF4/home-2.png"
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="map-view"
                options={{
                    title: "Map View",
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon
                            focused={focused}
                            activeUri="https://i.ibb.co/Z65MVQXW/home-2.png"
                            inactiveUri="https://i.ibb.co/7JkdBXPx/home-2.png"
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="bookings"
                options={{
                    title: "Bookings",
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon
                            focused={focused}
                            activeUri={"https://i.ibb.co/gZ4t1P2F/ticket.png"}
                            inactiveUri={"https://i.ibb.co/C5y5WD9K/ticket.png"} />

                    ),
                }}
            />
            <Tabs.Screen
                name="wallet"
                options={{
                    title: "Wallet",
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon
                            focused={focused}
                            activeUri={"https://i.ibb.co/YBZZ2SjJ/ticket.png"}
                            inactiveUri={"https://i.ibb.co/zj6GZBY/ticket.png"} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon
                            focused={focused}
                            activeUri={"https://i.ibb.co/TxhnR88J/user.png"}
                            inactiveUri={"https://i.ibb.co/Qvt8NkcM/user.png"} />
                    ),
                }}
            />
        </Tabs>
    );
}
