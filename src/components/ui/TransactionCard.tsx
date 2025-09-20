import React, { JSX } from "react";
import { View, Image, Text, Pressable, StyleSheet } from "react-native";
import Card from "../Card";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";
import { Transaction } from "@/mocks/data";

type TransactionCardProps = {
    transaction: Transaction;
    defaultAvatar: () => JSX.Element;
    onPress?: () => void;
};

const TransactionCard: React.FC<TransactionCardProps> = ({
    transaction,
    defaultAvatar,
    onPress,
}) => {
    const { picture, title, date, time, type, amount } = transaction;

    return (
        <Card style={{ marginBottom: 12 }}>
            <Pressable style={styles.card} onPress={onPress}>
                <View style={styles.row}>
                    {picture ? (
                        <Image source={{ uri: picture }} style={styles.avatarImage} />
                    ) : (
                        defaultAvatar()
                    )}
                    <View>
                        <ThemedText type="labelMedium">{title}</ThemedText>
                        <ThemedText
                            color={Colors.linkView}
                            type="labelMedium"
                            style={styles.dateText}
                        >
                            {date} | {time}
                        </ThemedText>
                    </View>
                </View>

                <View style={styles.amountWrapper}>
                    <Pressable
                        style={[
                            styles.typeBadge,
                            {
                                backgroundColor:
                                    type === "Topup" ? "#E1EEFE" : Colors.primaryTransparent,
                            },
                        ]}
                    >
                        <Text
                            style={{ color: type === "Topup" ? "#4094FA" : Colors.primary }}
                        >
                            {type}
                        </Text>
                    </Pressable>
                    <ThemedText type="defaultSemiBold" fontVariant="semiBold">
                        {amount}
                    </ThemedText>
                </View>
            </Pressable>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: Colors.catskillWhite,
        justifyContent: "center",
        alignItems: "center",
    },
    avatarImage: {
        width: 40,
        height: 40,
        borderRadius: 100,
    },
    dateText: {
        marginTop: 2,
        fontSize: 12,
    },
    amountWrapper: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 4,
    },
    typeBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },
});

export default TransactionCard;
