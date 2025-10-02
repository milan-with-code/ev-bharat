import { View, StyleSheet } from "react-native";
import { Link, router } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { BookingCard } from "@/components/ui/BookingCard";

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  image: {
    width: "100%",
    height: 140,
    borderRadius: 8,
    overflow: "hidden",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 12,
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconTextRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  marginLeft8: {
    marginLeft: 8,
  },
  separator: {
    marginVertical: 8,
  },
});
interface UpcomingBookingPropsType {
  isHeader?: boolean
  isCancelled?: boolean
  keyValue?: string
}



export default function UpcomingBooking({ isHeader = false, isCancelled = false, keyValue = "" }: UpcomingBookingPropsType) {
  return (
    <>
      {
        isHeader &&
        <View style={styles.headerRow}>
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
      }
      <BookingCard
        imageUrl="https://media.gettyimages.com/id/2159021792/photo/electric-car-charging.jpg?s=2048x2048&w=gi&k=20&c=h7L3dhuK7WV67Oeib-Ggc-Smw9xuV5zheyd99uAlF2U="
        title="Premium EV Hub"
        address="MG Road Near Forum Mall"
        distance="850m"
        time="Today, 4:30 to 5:30 PM"
        slot="Slot CC22 Charger 2"
        onDirectionPress={() => console.log("Direction pressed")}
        isCancelled={isCancelled}
        onPress={() => router.push(`/(main)/(extra)/bookings/${keyValue}`)}
      />
      <BookingCard
        imageUrl="https://media.gettyimages.com/id/2159021792/photo/electric-car-charging.jpg?s=2048x2048&w=gi&k=20&c=h7L3dhuK7WV67Oeib-Ggc-Smw9xuV5zheyd99uAlF2U="
        title="Premium EV Hub"
        address="MG Road Near Forum Mall"
        distance="850m"
        time="Today, 4:30 to 5:30 PM"
        slot="Slot CC22 Charger 2"
        onDirectionPress={() => console.log("Direction pressed")}
        style={{ marginTop: 16 }}
        isCancelled={isCancelled}
      />
    </>
  );
}
