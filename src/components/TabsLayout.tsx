import { Colors } from "@/constants/Colors";
import React, { useState } from "react";
import { View, Pressable, StyleSheet, ScrollView } from "react-native";
import { ThemedText } from "./ThemedText";

interface TabItem {
    key: string;
    title: string;
    content: React.ReactNode;
}

interface TabsLayoutProps {
    tabs: TabItem[];
    defaultTab?: string;
}

export const TabsLayout: React.FC<TabsLayoutProps> = ({ tabs, defaultTab }) => {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].key);

    return (
        <View style={styles.container}>
            <View style={styles.tabList}>
                {tabs.map((tab) => {
                    const isActive = tab.key === activeTab;
                    return (
                        <Pressable
                            key={tab.key}
                            style={[styles.tabButton, isActive && styles.activeTabButton]}
                            onPress={() => setActiveTab(tab.key)}
                        >
                            <ThemedText type="defaultSemiBold" color={isActive ? Colors.primary : Colors.nutralsBlack} >
                                {tab.title}
                            </ThemedText>
                        </Pressable>
                    );
                })}
            </View>

            <ScrollView contentContainerStyle={styles.tabContent} showsVerticalScrollIndicator={false}>
                {tabs.find((tab) => tab.key === activeTab)?.content}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    tabList: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    tabButton: {
        flex: 1,
        paddingBottom: 12,
        alignItems: "center",
    },
    activeTabButton: {
        borderBottomWidth: 2,
        borderBottomColor: Colors.primary,
    },
    tabText: {
        fontSize: 16,
        color: "#666",
        fontWeight: "500",
    },
    activeTabText: {
        color: Colors.primary,
        fontWeight: "700",
    },
    tabContent: {
        flexGrow: 1, paddingTop: 24, paddingBottom: 50
    },
});
