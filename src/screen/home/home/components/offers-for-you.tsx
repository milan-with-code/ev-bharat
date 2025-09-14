import Card from "@/components/Card";
import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { View } from "react-native";
import PumpStation from "@assets/svg/pump-station.svg";
import { Colors } from "@/constants/Colors";
import { Badge } from "@/components/Badge";

export default function OffersForYou() {
  return (
    <View style={{ marginVertical: 16 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <ThemedText type="defaultSemiBold" fontVariant="semiBold">Offers For You</ThemedText>
        <Link href="/(main)/(extra)/offers">
          <ThemedText fontVariant="regular" type="labelMedium" color={Colors.linkView}>View All</ThemedText>
        </Link>
      </View>
      <Card>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "75%" }}>
            <ThemedText
              style={{
                fontSize: 14,
                lineHeight: 20,
                letterSpacing: 0.1,
                color: Colors.nutralsBlack,
                fontFamily: "Outfit_600SemiBold",
                paddingBottom: 4
              }}
            >
              20% OFF Evening Parking!
            </ThemedText>
            <ThemedText fontVariant="regular" type="labelMedium" color={Colors.regentGray}>
              Applicable between 5 PM – 8 PM at select locations.
            </ThemedText>
            <Badge style={{ marginTop: 8 }} type="labelMedium" fontVariant="semiBold">Book Now</Badge>
          </View>
          <PumpStation />
        </View>
      </Card>
    </View>
  );
}
