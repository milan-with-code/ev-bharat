import { Dimensions, FlatList, Pressable, StyleSheet, View } from "react-native"
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import React from "react";
import { EvType, SelectVehicleType } from "@/types";

const { width: screenWidth } = Dimensions.get("window");

const H_PADDING = 32;
const GAP = 16;
const NUM_COLUMNS = 2;

const itemWidth =
    (screenWidth - H_PADDING - GAP * (NUM_COLUMNS - 1)) / NUM_COLUMNS;

export default function SelectVehicleSection({ title, data, selected, onSelect }: SelectVehicleType) {
    const BrandRenderItem = ({ icon: Icon, type }: EvType) => {
        const isSelected = type === selected;
        return (
            <Pressable
                style={[styles.card, { width: itemWidth }, isSelected && styles.cardSelected]}
                onPress={() => onSelect(type)}
            >
                <Icon style={styles.icon} width={32} height={32} />
                <ThemedText type="defaultSemiBold" fontVariant="semiBold">
                    {type}
                </ThemedText>
            </Pressable>
        );
    };
    return (
        <React.Fragment>
            <View style={styles.headerWrapper}>
                <ThemedText style={styles.heading}>{title}</ThemedText>
            </View>
            <View style={styles.listWrapper}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.type}
                    renderItem={({ item }) => <BrandRenderItem {...item} />}
                    numColumns={NUM_COLUMNS}
                    columnWrapperStyle={{ justifyContent: "space-between" }}
                />
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    headerWrapper: {
        paddingTop: 24,
        paddingBottom: 16
    },
    heading: {
        textAlign: "center",
        fontSize: 24,
        lineHeight: 32,
        fontFamily: "Outfit_700Bold",
    },
    listWrapper: {
        padding: 16,
    },
    card: {
        paddingVertical: 12,
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: Colors.borderColor,
        borderRadius: 12,
        alignItems: "center",
        marginBottom: GAP,
    },
    cardSelected: {
        backgroundColor: Colors.primaryTransparent,
        borderWidth: 1,
        borderColor: Colors.primary,
    },
    icon: {
        marginBottom: 8,
    },
});
