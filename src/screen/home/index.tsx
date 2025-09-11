import { View, Pressable, ScrollView } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { AntDesign, Feather, FontAwesome5 } from "@expo/vector-icons";
import { Separator } from "@/components/Separator";
import { Colors } from "@/constants/Colors";
import Windy from "@assets/svg/windy.svg";
import Tree from "@assets/svg/tree.svg";
import Card from "@/components/card";
import ProgressBar from "@/components/ProgressBar";
import UpcomingBooking from "./components/upcoming-booking";
import OffersForYou from "./components/offers-for-you";
import NearBySection from "./components/near-by-section";

export default function HomeLayout() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.alabaster
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 16,
        }}
      >
        <Card>
          <View>
            <ThemedText type="defaultSemiBold" fontVariant="semiBold">BMW I3</ThemedText>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
                paddingTop: 4,
              }}
            >
              <AntDesign name="car" size={24} color="black" />
              <ThemedText type="label" fontVariant="regular">GJ-12-DD-0000</ThemedText>
            </View>
          </View>
          <Separator thickness={1} />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            >
              <Windy />
              <View>
                <ThemedText type="defaultSemiBold" fontVariant="semiBold" color={Colors.shark}>24°C</ThemedText>
                <ThemedText type="label" fontVariant="regular" color={Colors.mako}>Partly Cloudy</ThemedText>
              </View>
            </View>
            <Separator orientation="vertical" thickness={1.5} color="#ACB4B9" />
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            >
              <Tree />
              <View>
                <ThemedText type="defaultSemiBold" fontVariant="semiBold" color={Colors.shark}>88/100</ThemedText>
                <ThemedText type="label" fontVariant="regular" color={Colors.mako}>Eco Score</ThemedText>
              </View>
            </View>
          </View>
          <ThemedText type="labelMedium" fontVariant="regular" color={Colors.mako}>
            Eco Score is based on driving habits, braking, and battery usage.
          </ThemedText>
          <Separator thickness={1} />
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Pressable>
              <ThemedText type="defaultSemiBold" fontVariant="semiBold" color={Colors.primary}>Switch Vehicle</ThemedText>
            </Pressable>
            <Separator
              orientation="vertical"
              thickness={1.5}
              color={Colors.primary}
            />
            <Pressable>
              <ThemedText type="defaultSemiBold" fontVariant="semiBold" color={Colors.primary}>EV performance</ThemedText>
            </Pressable>
          </View>
        </Card>
        <View style={{ flexDirection: "row", gap: 16, marginVertical: 16 }}>
          <Card width="48%">
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: Colors.nutralsBlack,
                  borderRadius: 8,
                  height: 32,
                  width: 32,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Feather name="battery" size={20} color="white" />
              </View>
              <ThemedText type="defaultSemiBold" fontVariant="regular">Battery</ThemedText>
            </View>
            <ProgressBar progress={72} />
          </Card>
          <Card width="48%">
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: Colors.nutralsBlack,
                  borderRadius: 8,
                  height: 32,
                  width: 32,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome5 name="gas-pump" size={20} color="white" />
              </View>
              <ThemedText type="defaultSemiBold" fontVariant="regular">Range</ThemedText>
            </View>
            <View>
              <ThemedText type="defaultSemiBold" fontVariant="semiBold">241.2 KM</ThemedText>
              <ThemedText type="labelMedium" fontVariant="semiBold" color={Colors.primary}>3Hrs 20 Min</ThemedText>
            </View>
          </Card>
        </View>
        <UpcomingBooking />
        <OffersForYou />
        <NearBySection />
      </ScrollView>
    </View>
  );
}
