import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Badge } from "@/components/Badge";
import Card from "@/components/Card";
import FilterList from "@/components/FilterList";
import { ThemedText } from "@/components/ThemedText";
import SectionHeader from "@/components/ui/SectionHeader";
import { Colors } from "@/constants/Colors";
import Pump from "@assets/svg/pump.svg";
import { filterStation, nearByStation, NearByStationType } from "@/mocks/data";
import DirectionButton from "@/components/DirectionButton";
import NearStationDetailsModal from "@/components/modal/NearStationDetails";

export default function NearBySection() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStation, setSelectedStation] = useState<NearByStationType | null>(null);

  const handleFilterSelect = (selected: string) => {
    console.log("Selected filter:", selected);
  };

  const openModal = (station: NearByStationType) => {
    setSelectedStation(station);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedStation(null);
  };

  const renderStationCard = ({ item }: { item: NearByStationType }) => (
    <Card
      padding={10}
      style={styles.card}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.stationImage }} style={styles.image} contentFit="cover" cachePolicy="memory-disk" />
        <Pressable style={styles.heartButton}>
          <Ionicons name="heart-outline" size={16} color="white" />
        </Pressable>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.rowSpaceBetween}>
          <Badge>{item.stationType}</Badge>
          <ThemedText color={Colors.primary} type="labelMedium" fontVariant="semiBold">
            {item.stationRate}
            <ThemedText type="labelMedium">/Hrs</ThemedText>
          </ThemedText>
        </View>

        <View style={styles.infoContainer}>
          <ThemedText type="label" fontVariant="semiBold">{item.stationName}</ThemedText>
          <ThemedText
            color={Colors.regentGray}
            type="labelMedium"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {item.stationAddress}
          </ThemedText>
        </View>

        <View style={[styles.rowSpaceBetween, { paddingTop: 8 }]}>
          <Badge
            variant="secondary"
            color={Colors.nutralsBlack}
            fontVariant="regular"
            icon={
              item.stationType === "EV Charging" ? (
                <Pump width={20} height={20} />
              ) : (
                <MaterialCommunityIcons name="car-brake-parking" size={16} color={Colors.nutralsBlack} />
              )
            }
          >
            {item.slot}
          </Badge>
          <DirectionButton />
        </View>
      </View>
    </Card>
  );

  return (
    <>
      <SectionHeader title="Near By Station" linkHref="/(main)/(extra)/offers" />
      <FilterList items={filterStation} onSelect={handleFilterSelect} />
      <FlatList
        data={nearByStation}
        renderItem={renderStationCard}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled={false}
      />

      {selectedStation && (
        <NearStationDetailsModal
          visible={modalVisible}
          onClose={closeModal}
          title={selectedStation.stationName}
        >
          <ThemedText>{selectedStation.stationAddress}</ThemedText>
          <ThemedText>{selectedStation.stationRate}/Hrs</ThemedText>
          <ThemedText>Slots Available: {selectedStation.slot}</ThemedText>
        </NearStationDetailsModal>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    gap: 12,
    width: "100%",
    marginBottom: 12,
  },
  imageContainer: {
    width: 96,
    height: 116,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  heartButton: {
    position: "absolute",
    right: 4,
    top: 4,
    backgroundColor: "#212427",
    borderRadius: 100,
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
  },
  rowSpaceBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  infoContainer: {
    paddingTop: 8,
  },
});
