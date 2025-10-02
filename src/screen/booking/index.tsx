import BackButton from "@/components/BackButton";
import ScreenWrapper from "@/components/ScreenWrapper";
import { TabsLayout } from "@/components/TabsLayout";
import { ReactNode } from "react";
import { View } from "react-native";
import UpcomingBooking from "../home/components/upcoming-booking";

interface TabItemsProps {
  key: string,
  title: string,
  content: ReactNode
}

const tabItems: TabItemsProps[] = [
  {
    key: "upcoming",
    title: "Upcoming",
    content: <UpcomingBooking keyValue={"upcoming"} />,
  },
  {
    key: "completed",
    title: "Completed",
    content: <UpcomingBooking keyValue={"completed"} />,
  },
  {
    key: "cancelled",
    title: "Cancelled",
    content: <UpcomingBooking isCancelled keyValue={"cancelled"} />,
  },
];

export default function BookingLayout() {
  return (
    <ScreenWrapper>
      <BackButton textOnly text="My Booking" textStyle={{ paddingHorizontal: 16 }} />
      <View style={{ flex: 1, paddingHorizontal: 16, marginTop: 16 }}>
        <TabsLayout tabs={tabItems} defaultTab="upcoming" />
      </View>
    </ScreenWrapper>
  );
}
