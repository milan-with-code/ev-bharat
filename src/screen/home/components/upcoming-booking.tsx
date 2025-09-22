import Card from "@/components/Card";
import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { View } from "react-native";
import { Colors } from "@/constants/Colors";
import { Separator } from "@/components/Separator";
import AntDesign from "@expo/vector-icons/AntDesign";
import Pump from "@assets/svg/pump.svg";
import { Image } from "expo-image";
import DirectionButton from "@/components/DirectionButton";

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
        <ThemedText type="defaultSemiBold" fontVariant="semiBold">
          Upcoming Booking
        </ThemedText>
        <Link href="/(main)/(extra)/booking-history">
          <ThemedText
            fontVariant="regular"
            type="labelMedium"
            color={Colors.linkView}
          >
            View All
          </ThemedText>
        </Link>
      </View>
      <Card padding={12}>
        <Image source={{ uri: "https://media.gettyimages.com/id/2159021792/photo/electric-car-charging.jpg?s=2048x2048&w=gi&k=20&c=h7L3dhuK7WV67Oeib-Ggc-Smw9xuV5zheyd99uAlF2U=" }}
          style={{ width: "100%", height: 140, borderRadius: 8, overflow: "hidden" }}
          contentFit="cover"
          cachePolicy="memory-disk"
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 12
          }}
        >
          <View>
            <ThemedText type="label" fontVariant="semiBold">
              Premium EV Hub
            </ThemedText>
            <ThemedText type="label" color={Colors.regentGray}>
              MG Road Near Forum Mall, 850m Away
            </ThemedText>
          </View>
          <DirectionButton size={40} />
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
              name="clockcircle"
              size={15}
              color={Colors.nutralsBlack}
            />
            <ThemedText
              fontVariant="regular"
              type="labelMedium"
              style={{ marginLeft: 8 }}
            >
              Today, 4:30 to 5:30 PM
            </ThemedText>
          </View>
          <Separator thickness={1} orientation="vertical" color="#ACB4B9" />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pump width={20} height={20} />
            <ThemedText
              fontVariant="regular"
              type="labelMedium"
              style={{ marginLeft: 8 }}
            >
              Slot CC22 Charger 2
            </ThemedText>
          </View>
        </View>
      </Card>
    </>
  );
}
