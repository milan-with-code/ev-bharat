import Card from "@/components/Card";
import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { Pressable, View } from "react-native";
import Bold from "@assets/svg/bold.svg";
import { Colors } from "@/constants/Colors";
import { Separator } from "@/components/Separator";
import { AntDesign } from "@expo/vector-icons";
import Pump from "@assets/svg/pump.svg";

export default function UpcomingBooking() {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <ThemedText type="defaultSemiBold" fontVariant="semiBold">Upcoming Booking</ThemedText>
        <Link href="/(main)/(extra)/booking-history">
          <ThemedText fontVariant="regular" type="labelMedium" color={Colors.linkView}>View All</ThemedText>
        </Link>
      </View>
      <Card padding={12}>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <ThemedText type="label" fontVariant="semiBold">Premium EV Hub</ThemedText>
              <ThemedText type="label" color={Colors.regentGray}>
                MG Road Near Forum Mall, 850m Away
              </ThemedText>
            </View>
            <Pressable
              style={{
                borderRadius: 50,
                backgroundColor: Colors.primaryTransparent,
                height: 40,
                width: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Bold />
            </Pressable>
          </View>
          <Separator orientation="horizontal" style={{ marginVertical: 8 }} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign
                name="clockcircleo"
                size={15}
                color={Colors.nutralsBlack}
              />
              <ThemedText fontVariant="regular" type="labelMedium" style={{ marginLeft: 8 }}>
                Today, 4:30 to 5:30 PM
              </ThemedText>
            </View>
            <Separator thickness={1} orientation="vertical" color="#ACB4B9" />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Pump width={20} height={20} />
              <ThemedText fontVariant="regular" type="labelMedium" style={{ marginLeft: 8 }}>
                Slot CC22 Charger 2
              </ThemedText>
            </View>
          </View>
        </View>
      </Card>
    </>
  );
}
