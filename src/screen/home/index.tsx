import { View, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { AntDesign, Feather, FontAwesome5 } from "@expo/vector-icons";
import { Separator } from "@/components/Separator";
import { Colors } from "@/constants/Colors";
import Windy from "@assets/svg/windy.svg";
import Tree from "@assets/svg/tree.svg";
import ProgressBar from "@/components/ProgressBar";
import UpcomingBooking from "./components/upcoming-booking";
import OffersForYou from "./components/offers-for-you";
import NearBySection from "./components/near-by-section";
import Card from "@/components/Card";
import ScreenWrapper from "@/components/ScreenWrapper";
import { Link } from "expo-router";

const InfoRow = ({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) => (
  <View style={styles.row}>
    {icon}
    <View>
      <ThemedText type="defaultSemiBold" fontVariant="semiBold" color={Colors.shark}>
        {title}
      </ThemedText>
      <ThemedText type="label" fontVariant="regular" color={Colors.mako}>
        {subtitle}
      </ThemedText>
    </View>
  </View>
);

const StatCard = ({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) => (
  <Card width="48%">
    <View style={styles.statHeader}>
      <View style={styles.iconBox}>{icon}</View>
      <ThemedText type="defaultSemiBold">{label}</ThemedText>
    </View>
    {children}
  </Card>
);

export default function HomeLayout() {
  return (
    <ScreenWrapper>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <Card>
          <View>
            <ThemedText type="defaultSemiBold" fontVariant="semiBold">BMW I3</ThemedText>
            <InfoRow
              icon={<AntDesign name="car" size={24} color="black" />}
              title="GJ-12-DD-0000"
              subtitle=""
            />
          </View>

          <Separator thickness={1} style={{ marginBottom: 16 }} />

          <View style={styles.spaceBetween}>
            <InfoRow icon={<Windy />} title="24°C" subtitle="Partly Cloudy" />
            <Separator orientation="vertical" thickness={1.5} color="#ACB4B9" />
            <InfoRow icon={<Tree />} title="88/100" subtitle="Eco Score" />
          </View>

          <ThemedText type="labelMedium" fontVariant="regular" color={Colors.mako}>
            Eco Score is based on driving habits, braking, and battery usage.
          </ThemedText>

          <Separator thickness={1} style={styles.separator} />

          <View style={styles.linksRow}>
            <Link href="/(main)/(extra)/switch-vehicle" asChild>
              <ThemedText type="defaultSemiBold" fontVariant="semiBold" color={Colors.primary}>
                Switch Vehicle
              </ThemedText>
            </Link>
            <Separator orientation="vertical" thickness={1.5} color={Colors.primary} />
            <Link href="/(main)/(extra)/ev-performance" asChild>
              <ThemedText type="defaultSemiBold" fontVariant="semiBold" color={Colors.primary}>
                EV Performance
              </ThemedText>
            </Link>
          </View>
        </Card>

        <View style={styles.statsRow}>
          <StatCard icon={<Feather name="battery" size={20} color="white" />} label="Battery">
            <ProgressBar progress={72} />
          </StatCard>

          <StatCard icon={<FontAwesome5 name="gas-pump" size={20} color="white" />} label="Range">
            <ThemedText type="defaultSemiBold" fontVariant="semiBold">241.2 KM</ThemedText>
            <ThemedText type="labelMedium" fontVariant="semiBold" color={Colors.primary}>
              3Hrs 20 Min
            </ThemedText>
          </StatCard>
        </View>

        <UpcomingBooking />
        <OffersForYou />
        <NearBySection />
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: "row",
    gap: 8,
    paddingTop: 4,
  },
  spaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 16,
  },
  separator: {
    marginVertical: 16,
  },
  linksRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  statsRow: {
    flexDirection: "row",
    gap: 16,
    marginVertical: 16,
  },
  statHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 16,
  },
  iconBox: {
    backgroundColor: Colors.nutralsBlack,
    borderRadius: 8,
    height: 32,
    width: 32,
    justifyContent: "center",
    alignItems: "center",
  },
});
