import BackButton from "@/components/BackButton";
import ScreenWrapper from "@/components/ScreenWrapper";
import { Image } from "expo-image";
import { FlatList, Pressable, Text, View, StyleSheet } from "react-native";
import Frame from "@assets/Frame.png";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { transactionHistory } from "@/mocks/data";
import TransactionCard from "@/components/ui/TransactionCard";
import PrimaryButton from "@/components/PrimaryButton";

export const defaultAvatar = () => (
  <View style={styles.avatar}>
    <Ionicons name="wallet-outline" size={24} color="black" />
  </View>
);

export default function WalletLayout() {
  return (
    <ScreenWrapper>
      <BackButton textOnly text="Wallet" textStyle={styles.headerText} />
      <View style={styles.container}>
        <View style={styles.balanceCard}>
          <Image source={Frame} style={styles.frameImage} />
          <View style={styles.balanceContent}>
            <Text style={styles.balanceLabel}>Your balance</Text>
            <View style={styles.balanceRow}>
              <Text style={styles.balanceValue}>$93.79</Text>
              <Pressable style={styles.topUpButton}>
                <Feather name="download" size={20} color={Colors.primary} />
                <ThemedText
                  type="default"
                  fontVariant="semiBold"
                  color={Colors.primary}
                >
                  Top Up
                </ThemedText>
              </Pressable>
            </View>
          </View>
        </View>

        <ThemedText
          type="defaultSemiBold"
          fontVariant="semiBold"
          style={styles.historyLabel}
        >
          Transaction History
        </ThemedText>
        <FlatList
          data={transactionHistory}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <TransactionCard transaction={item} defaultAvatar={defaultAvatar} />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <PrimaryButton
        title="Transaction History"
        onPress={() => router.push("/(main)/(extra)/transaction-history")}
        style={{ position: "absolute", bottom: 14, left: 16, right: 16 }}
      />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    position: "relative",
  },
  headerText: {
    paddingHorizontal: 16,
  },
  balanceCard: {
    height: 112,
    width: "100%",
    borderRadius: 16,
    overflow: "hidden",
    marginVertical: 24,
    position: "relative",
  },
  frameImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  balanceContent: {
    position: "absolute",
    left: 32,
    right: 30,
    top: 25,
    bottom: 25,
  },
  balanceLabel: {
    color: "white",
    fontSize: 15,
    fontFamily: "Outfit_600SemiBold",
    lineHeight: 32,
  },
  balanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  balanceValue: {
    color: "white",
    fontSize: 28,
    fontFamily: "Outfit_400Regular",
    lineHeight: 36,
  },
  topUpButton: {
    backgroundColor: "white",
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 12,
    height: 38,
    justifyContent: "center",
  },
  historyLabel: {
    marginBottom: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: Colors.catskillWhite,
    justifyContent: "center",
    alignItems: "center",
  },
});
