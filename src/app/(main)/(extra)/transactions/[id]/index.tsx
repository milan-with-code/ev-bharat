import { View, FlatList, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import ScreenWrapper from "@/components/ScreenWrapper";
import BackButton from "@/components/BackButton";
import Card from "@/components/Card";
import { Separator } from "@/components/Separator";
import { Image } from "expo-image";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";

const billingItems = [
  {
    id: "1",
    label: "Energy (18.5 kWh × $0.09)",
    value: "$16.6",
    color: Colors.linkView,
  },
  { id: "2", label: "Service Fee", value: "$1.0", color: Colors.linkView },
  { id: "3", label: "Tax", value: "$2.0", color: Colors.linkView },
  {
    id: "total",
    label: "Total Amount",
    value: "$4.08",
    fontVariant: "semiBold",
  },
];

const transactionDetails = [
  { id: "1", label: "Payment Mode", value: "Wallet" },
  { id: "2", label: "Date", value: "1 Aug 2025" },
  { id: "3", label: "Transaction ID", value: "1234DCBA" },
  { id: "4", label: "Transaction Status", value: "Success", type: "badge" },
];

export default function TransactionDetail() {
  const params = useLocalSearchParams<{ id: string }>();

  const renderRow = (item: any, index: number, dataLength: number) => (
    <View
      style={[styles.row, index === dataLength - 1 && { paddingBottom: 0 }]}
    >
      <ThemedText
        type="labelMedium"
        color={item.color}
        fontVariant={item.fontVariant}
      >
        {item.label}
      </ThemedText>
      {item.type === "badge" ? (
        <Badge type="labelMedium" fontVariant="regular">
          {item.value}
        </Badge>
      ) : (
        <ThemedText
          type={item.fontVariant ? "label" : "labelMedium"}
          fontVariant={item.fontVariant || "normal"}
        >
          {item.value}
        </ThemedText>
      )}
    </View>
  );

  return (
    <ScreenWrapper>
      <BackButton back text="Transaction Detail" />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Card>
          <View style={styles.stationRow}>
            <View style={styles.stationInfo}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1470224114660-3f6686c562eb?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
                style={styles.stationImage}
              />
              <View>
                <ThemedText color="#212121">Green Mall Station</ThemedText>
                <ThemedText color={Colors.linkView}>
                  5th Block, Koramangala
                </ThemedText>
              </View>
            </View>
            <Badge type="labelMedium" fontVariant="regular">
              Charging
            </Badge>
          </View>

          <Separator thickness={1} style={{ marginBottom: 12 }} />

          <View style={styles.metricsRow}>
            <View style={styles.metric}>
              <ThemedText color="#212121" type="label" fontVariant="semiBold">
                Type A
              </ThemedText>
              <ThemedText color={Colors.mineShaft} type="labelMedium">
                Connector
              </ThemedText>
            </View>
            <Separator thickness={1.5} orientation="vertical" />
            <View style={styles.metric}>
              <ThemedText color="#212121" type="label" fontVariant="semiBold">
                18.5 kwh
              </ThemedText>
              <ThemedText color={Colors.mineShaft} type="labelMedium">
                Energy Used
              </ThemedText>
            </View>
            <Separator thickness={1.5} orientation="vertical" />
            <View style={styles.metric}>
              <ThemedText color="#212121" type="label" fontVariant="semiBold">
                1:30 Hrs
              </ThemedText>
              <ThemedText color={Colors.mineShaft} type="labelMedium">
                Duration
              </ThemedText>
            </View>
          </View>

          <Separator thickness={1} style={{ marginBottom: 12 }} />

          <View style={styles.sessionRow}>
            <ThemedText color={Colors.linkView} type="labelMedium">
              Session ID : ABC123
            </ThemedText>
            <ThemedText color={Colors.linkView} type="labelMedium">
              Booked on 1 Aug 2025
            </ThemedText>
          </View>
        </Card>

        <Card style={{ marginVertical: 16 }}>
          <FlatList
            data={billingItems}
            scrollEnabled={false}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
              <Separator thickness={1} style={{ marginBottom: 12 }} />
            )}
            renderItem={({ item, index }) =>
              renderRow(item, index, billingItems.length)
            }
          />
        </Card>

        <Card>
          <FlatList
            data={transactionDetails}
            scrollEnabled={false}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
              <Separator thickness={1} style={{ marginVertical: 12 }} />
            )}
            renderItem={({ item, index }) =>
              renderRow(item, index, transactionDetails.length)
            }
          />
        </Card>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button title="Continue" />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    paddingBottom: 100, // space for absolute button
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 12,
  },
  stationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  stationInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  stationImage: {
    width: 64,
    height: 64,
    borderRadius: 12,
    marginRight: 12,
  },
  metricsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  metric: {
    alignItems: "center",
    flex: 1,
  },
  sessionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContainer: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    padding: 16,
    justifyContent: "center",
  },
});
