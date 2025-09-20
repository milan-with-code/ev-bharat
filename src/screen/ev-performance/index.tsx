import BackButton from "@/components/BackButton";
import Card from "@/components/Card";
import ScreenWrapper from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { View } from "react-native";
import ChargingCircle from "./components/charging-progress";
import { Separator } from "@/components/Separator";
import WeeklyChartCard from "./components/weekly-chart-card";
import ChargingHistoryChart from "./components/charging-history-chart";

export default function EvPerformancePage() {
    return (
        <ScreenWrapper>
            <BackButton back text="EV Performance" />
            <View style={{ flex: 1, padding: 16, }}>
                <Card>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <ChargingCircle percentage={80} />
                            <View>
                                <ThemedText type="defaultSemiBold" fontVariant="semiBold" color={Colors.primary}>80%</ThemedText>
                                <ThemedText color={Colors.mineShaft} type="labelMedium" >EV Charging</ThemedText>
                            </View>
                        </View>
                        <View style={{ alignItems: "flex-end" }}>
                            <ThemedText type="defaultSemiBold" fontVariant="semiBold" color={Colors.primary}>BMW I3</ThemedText>
                            <ThemedText color={Colors.mineShaft} type="labelMedium" >GJ-12-DD-0000</ThemedText>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
                        <View style={{ backgroundColor: Colors.primaryTransparent, padding: 12, borderRadius: 16, }}>
                            <ThemedText color={Colors.mineShaft} type="labelMedium">Consumption</ThemedText>
                            <ThemedText color={Colors.linkView} style={{ paddingTop: 4 }}><ThemedText style={{ fontSize: 16, lineHeight: 24, letterSpacing: 0.15, fontWeight: 600, fontFamily: "Outfit_600SemiBold", }}>18.5 kwh</ThemedText> /day</ThemedText>
                        </View>
                        <View style={{ backgroundColor: "#FEF4E1", padding: 12, borderRadius: 16, }}>
                            <ThemedText color={Colors.mineShaft} type="labelMedium">Mailage</ThemedText>
                            <ThemedText color={Colors.linkView} style={{ paddingTop: 4 }}><ThemedText style={{ fontSize: 16, lineHeight: 24, letterSpacing: 0.15, fontWeight: 600, fontFamily: "Outfit_600SemiBold" }}>232</ThemedText> KM</ThemedText>
                        </View>
                    </View>
                    <Separator thickness={2} style={{ marginVertical: 16 }} />
                    <WeeklyChartCard
                        data={[25, 15, 20, 40, 22, 38, 18]}
                        totalCharged={135}
                        highlightIndex={2}
                    />
                </Card>
                <View style={{ marginTop: 24 }}>
                    <ThemedText>Charging History</ThemedText>
                    <Card style={{ marginTop: 12 }}>
                        <ChargingHistoryChart acPercent={72} dcPercent={28} />
                    </Card>
                </View>
            </View>
        </ScreenWrapper>
    )
}

