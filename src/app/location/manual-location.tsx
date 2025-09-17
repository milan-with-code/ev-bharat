import BackButton from "@/components/BackButton";
import ScreenWrapper from "@/components/ScreenWrapper";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Separator } from "@/components/Separator";

interface LocationDataType {
    location: string,
    address: string,
}

const locationData: LocationDataType[] = [
    {
        location: "Bhuj Airport",
        address: "Bhuj Airport IAF Campus , Bhuj-Gujarat",
    },
    {
        location: "Bhuj Bus Station ",
        address: "Gandinagari Airport Road, Old Dhatia Falia, Bhuj, Gujarat",
    },
    {
        location: "Bhujio Dungar",
        address: "Near RTO Circle Bhuj, Gujarat",
    }
]

export default function Page() {
    const [searchText, setSearchText] = useState("");
    return (
        <ScreenWrapper>
            <BackButton back text="Add Location" />
            <View style={styles.container}>
                <Ionicons name="search-outline" size={24} color="black" style={styles.icon} />

                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    value={searchText}
                    onChangeText={setSearchText}
                    placeholderTextColor={Colors.nutralsBlack}
                />

                {searchText.length > 0 && (
                    <TouchableOpacity onPress={() => setSearchText("")}>
                        <Ionicons name="close-circle-outline" size={24} color="#212121" />
                    </TouchableOpacity>
                )}
            </View>
            <View style={{ paddingVertical: 24 }}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10, paddingBottom: 12 }}>
                    <MaterialIcons name="my-location" size={24} color={Colors.primary} />
                    <ThemedText type="label" fontVariant="semiBold" color={Colors.primary} >Use Device Location</ThemedText>
                </View>
                <Separator color={Colors.borderColor} thickness={1} />
                {
                    locationData.map((data, ind) => (
                        <View key={ind} style={{ flexDirection: "row", gap: 8, paddingVertical: 12, borderBottomWidth: 1, borderColor: Colors.borderColor }}>
                            <Ionicons name="location-outline" size={24} color="#212121" />
                            <View>
                                <ThemedText type="label" fontVariant="semiBold" style={{ paddingBottom: 4 }}>{data.location}</ThemedText>
                                <ThemedText color={Colors.mako} type="label"   >{data.address}</ThemedText>
                            </View>
                        </View>
                    ))
                }
            </View>
        </ScreenWrapper>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.catskillWhite,
        borderRadius: 8,
        paddingHorizontal: 10,
        height: 56,
        borderWidth: 1,
        borderColor: Colors.catskillWhite,
        marginVertical: 24
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: Colors.nutralsBlack,
        lineHeight: 22,
        fontFamily: "Outfit_400Regular"
    },
    clearIcon: {
        marginLeft: 8,
    },
});
