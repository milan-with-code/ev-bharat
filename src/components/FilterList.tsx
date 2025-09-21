import React, { useState } from "react";
import { FlatList, Pressable, View, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";

interface FilterListProps {
    items: string[];
    onSelect?: (item: string) => void;
    initialSelected?: string;
}

const FilterList: React.FC<FilterListProps> = ({
    items,
    onSelect,
    initialSelected,
}) => {
    const [selected, setSelected] = useState(initialSelected || items[0]);

    const handleSelect = (item: string) => {
        setSelected(item);
        onSelect?.(item);
    };

    const renderItem = ({ item }: { item: string }) => (
        <Pressable
            onPress={() => handleSelect(item)}
            style={[styles.filterItem, selected === item && styles.selectedFilter]}
        >
            <ThemedText color={Colors.nutralsBlack}>
                {item}
            </ThemedText>
        </Pressable>
    );

    return (
        <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item}
            horizontal
            ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ marginBottom: 12 }}
        />
    );
};

const styles = StyleSheet.create({
    filterItem: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        backgroundColor: "white",
        borderColor: Colors.borderColor,
        borderWidth: 1
    },
    selectedFilter: {
        backgroundColor: Colors.primaryTransparent,
        borderColor: Colors.primary,
        borderWidth: 1,
    },
});

export default FilterList;
