import React from "react";
import { View, Image, StyleSheet, ViewStyle, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";
import DirectionButton from "@/components/DirectionButton";
import Pump from "@assets/svg/pump.svg";
import { Colors } from "@/constants/Colors";
import { Separator } from "../Separator";
import Card from "../Card";
import { Badge } from "../Badge";

interface BookingCardProps {
    imageUrl: string;
    title: string;
    address: string;
    distance: string;
    time: string;
    slot: string;
    onDirectionPress?: () => void;
    style?: ViewStyle
    isCancelled?: boolean
    onPress?: () => void
}

const IsCancelledContent = () => (
    <View>
        <Badge type="defaultSemiBold" fontVariant="regular" color="#212121" style={{ paddingHorizontal: 12, paddingVertical: 12, borderColor: Colors.primary, borderWidth: 1 }}>
            📅 Change of plans
        </Badge>
        <View style={{ gap: 4, paddingTop: 8 }}>
            <ThemedText color={Colors.mako} type="labelMedium">
                Write Reason
            </ThemedText>
            <TextInput
                placeholder="I have to Go Immediately Out of Town"
                style={{ fontFamily: "Outfit_400Regular", fontSize: 12, lineHeight: 16, letterSpacing: 0.5, backgroundColor: Colors.catskillWhite, borderRadius: 8, paddingHorizontal: 12, color: Colors.nutralsBlack }}
                placeholderTextColor={Colors.nutralsBlack}
            />
        </View>
    </View>
)

export const BookingCard: React.FC<BookingCardProps> = ({
    imageUrl,
    title,
    address,
    distance,
    time,
    slot,
    onDirectionPress,
    style,
    isCancelled,
    onPress
}) => {
    return (
        <Card padding={12} style={style} onPress={onPress}>
            <Image
                source={{ uri: imageUrl }}
                style={styles.image}
                resizeMode="cover"
            />

            <View style={styles.infoRow}>
                <View>
                    <ThemedText type="label" fontVariant="semiBold">
                        {title}
                    </ThemedText>
                    <ThemedText type="label" color={Colors.regentGray}>
                        {address}, {distance} Away
                    </ThemedText>
                </View>
                <DirectionButton size={40} onPress={onDirectionPress} />
            </View>

            <Separator orientation="horizontal" style={styles.separator} />
            {
                isCancelled ? <IsCancelledContent /> :

                    <View style={styles.detailsRow}>
                        <View style={styles.iconTextRow}>
                            <AntDesign name="clockcircle" size={15} color={Colors.nutralsBlack} />
                            <ThemedText
                                fontVariant="regular"
                                type="labelMedium"
                                style={styles.marginLeft8}
                            >
                                {time}
                            </ThemedText>
                        </View>

                        <Separator thickness={1} orientation="vertical" color="#ACB4B9" />

                        <View style={styles.iconTextRow}>
                            <Pump width={20} height={20} />
                            <ThemedText
                                fontVariant="regular"
                                type="labelMedium"
                                style={styles.marginLeft8}
                            >
                                {slot}
                            </ThemedText>
                        </View>
                    </View>
            }
        </Card>
    );
};

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 160,
        borderRadius: 8,
        marginBottom: 12,
    },
    infoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    detailsRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    iconTextRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    marginLeft8: {
        marginLeft: 8,
    },
    separator: {
        marginVertical: 12,
    },
});
