import Card from "@/components/Card";
import FilterList from "@/components/FilterList";
import SectionHeader from "@/components/ui/SectionHeader";
import { Colors } from "@/constants/Colors";
import { StyleSheet, View } from "react-native";

const filterStation = ["All", "EV Charging", "Parking", "Nearest"]

export default function NearBySection() {
  const handleFilterSelect = (selected: string) => {
    console.log("Selected filter:", selected);
  };
  return (
    <View>
      <SectionHeader
        title="Near By Station"
        linkHref="/(main)/(extra)/offers"
      />
      <FilterList items={filterStation} onSelect={handleFilterSelect} />
      <Card padding={10} style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <View >

        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  filterItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: "white",
    borderColor: Colors.borderColor,
    borderWidth: 1
  },
  selectedFilter: {
    backgroundColor: Colors.primaryTransparent,
    borderColor: Colors.primary,
    borderWidth: 1,
  },
});
