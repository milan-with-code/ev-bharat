import SearchInput from "@/components/SearchInput";
import { Separator } from "@/components/Separator";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { modalTypeData } from "@/mocks/data";
import { SelectVehicleType } from "@/types";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, View } from "react-native";

export default function SelectModelSection({ data, selected, title, onSelect }: SelectVehicleType) {
    const [selectedModalType, setSelectedModalType] = useState(modalTypeData[0]);

    return (
        <View>
            <View style={styles.headerContainer}>
                <SearchInput placeholder="Search Your Model" />

                <FlatList
                    data={modalTypeData}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.listContainer}
                    renderItem={({ item }) => {
                        const isSelected = selectedModalType === item;
                        return (
                            <Pressable
                                style={[styles.base, isSelected && styles.active]}
                                onPress={() => setSelectedModalType(item)}
                            >
                                <ThemedText>{item}</ThemedText>
                            </Pressable>
                        );
                    }}
                />
            </View>

            <View style={styles.modelsContainer}>
                <ThemedText
                    color="#212121"
                    type="defaultSemiBold"
                    fontVariant="semiBold"
                    style={{ paddingBottom: 4 }}
                >
                    Select Model
                </ThemedText>

                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        const isSelected = selected === item.connectors;
                        return (
                            <Pressable
                                style={[
                                    styles.baseModal,
                                    isSelected && styles.activeModal,
                                    { marginTop: 8 },
                                ]}
                                onPress={() => onSelect(item.connectors)}
                            >
                                <ThemedText
                                    color={isSelected ? Colors.primary : Colors.shark}
                                    type="defaultSemiBold"
                                    fontVariant="semiBold"
                                >
                                    {item.name}
                                </ThemedText>

                                <ThemedText color={Colors.shark} type="labelMedium">
                                    Connectors : {item.connectors}
                                </ThemedText>

                                <Separator thickness={0.8} style={{ marginVertical: 16 }} />

                                <View style={styles.specsRow}>
                                    <View>
                                        <ThemedText type="label" fontVariant="bold" color="#212121">
                                            {item.kwh}
                                        </ThemedText>
                                        <ThemedText type="labelMedium" color="#383838">
                                            kWh
                                        </ThemedText>
                                    </View>
                                    <View>
                                        <ThemedText type="label" fontVariant="bold" color="#212121">
                                            {item.range}
                                        </ThemedText>
                                        <ThemedText type="labelMedium" color="#383838">
                                            Range
                                        </ThemedText>
                                    </View>
                                    <View>
                                        <ThemedText type="label" fontVariant="bold" color="#212121">
                                            DC Fast
                                        </ThemedText>
                                        <ThemedText type="labelMedium" color="#383838">
                                            {item.dcFast}
                                        </ThemedText>
                                    </View>
                                </View>
                            </Pressable>
                        );
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingVertical: 16,
        borderBottomColor: Colors.borderColor,
        borderBottomWidth: 1,
        backgroundColor: "white",
        paddingHorizontal: 16,
    },
    listContainer: {
        gap: 12,
        marginTop: 16,
        paddingRight: 8,
    },
    base: {
        backgroundColor: Colors.catskillWhite,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    active: {
        backgroundColor: Colors.primaryTransparent,
        borderColor: Colors.primary,
        borderWidth: 1,
    },
    modelsContainer: {
        paddingVertical: 20,
        paddingHorizontal: 16,
    },
    baseModal: {
        padding: 16,
        borderColor: Colors.borderColor,
        borderWidth: 1,
        borderRadius: 12,
    },
    activeModal: {
        borderColor: Colors.primary,
        borderWidth: 1,
    },
    specsRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
});
