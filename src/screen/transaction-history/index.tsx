import BackButton from "@/components/BackButton";
import ScreenWrapper from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import TransactionCard from "@/components/ui/TransactionCard";
import { Colors } from "@/constants/Colors";
import { FlatList, Pressable, Text, View } from "react-native";
import { defaultAvatar } from "../wallet";
import { transactionHistory } from "@/mocks/data";
import { router } from "expo-router";

const filterOptions = ["Date", "Top-up", "Charging", "Parking"];

export default function TransactionHistory() {
    return (
        <ScreenWrapper>
            <BackButton back text="Transaction History" />
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: "white", padding: 16 }}>
                    <FlatList
                        data={filterOptions}
                        keyExtractor={(item) => item}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
                        renderItem={({ item }) => (
                            <Pressable
                                style={{
                                    backgroundColor: Colors.catskillWhite,
                                    paddingHorizontal: 16,
                                    paddingVertical: 8,
                                    borderRadius: 8,
                                }}
                            >
                                <ThemedText>{item}</ThemedText>
                            </Pressable>
                        )}
                    />
                </View>
                <View style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 24 }}>
                    <FlatList
                        data={transactionHistory}
                        keyExtractor={(_, index) => index.toString()}
                        renderItem={({ item }) => (
                            <TransactionCard
                                onPress={() =>
                                    router.push(`(main)/(extra)/transactions/${item.id}`)
                                }
                                transaction={item}
                                defaultAvatar={defaultAvatar}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </ScreenWrapper>
    );
}
