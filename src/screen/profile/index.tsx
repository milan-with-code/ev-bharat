import BackButton from "@/components/BackButton";
import { Button } from "@/components/Button";
import Card from "@/components/Card";
import ScreenWrapper from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { useUserStore } from "@/store/useUserStore";
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { ReactNode } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

interface ProfileSection {
  icon: ReactNode;
  title: string;
  route: string;
}

const profileSections: ProfileSection[] = [
  {
    icon: <AntDesign name="car" size={18} color="black" />,
    title: "My Vehicle",
    route: "",
  },
  {
    icon: <MaterialIcons name="local-offer" size={18} color="black" />,
    title: "Offer & Reward",
    route: "",
  },
  {
    icon: <Ionicons name="notifications-outline" size={18} color="black" />,
    title: "Notification",
    route: "",
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="cards-heart-outline"
        size={18}
        color="black"
      />
    ),
    title: "Favorite Station",
    route: "",
  },
  {
    icon: <Ionicons name="gift-outline" size={18} color="black" />,
    title: "Refer & Earn",
    route: "",
  },
  {
    icon: <MaterialIcons name="privacy-tip" size={18} color="black" />,
    title: "Privacy Policy",
    route: "",
  },
  {
    icon: <MaterialCommunityIcons name="hours-24" size={18} color="black" />,
    title: "Help Center",
    route: "",
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="share-variant-outline"
        size={18}
        color="black"
      />
    ),
    title: "Share App",
    route: "",
  },
];

export default function Profile() {
  const { user } = useUserStore();
  const router = useRouter();

  return (
    <ScreenWrapper>
      <BackButton textOnly text="Profile" textStyle={styles.headerText} />

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Card style={styles.profileCard}>
          <View style={styles.profileInfo}>
            <View style={styles.avatarWrapper}>
              {user?.profilePictureUrl && (
                <Image
                  source={{ uri: user.profilePictureUrl }}
                  style={styles.image}
                />
              )}
            </View>
            <View>
              <ThemedText type="defaultSemiBold">
                {user?.name || "N/A"}
              </ThemedText>
              <ThemedText type="defaultSemiBold">
                {user?.phone || "N/A"}
              </ThemedText>
            </View>
          </View>

          <Pressable
            onPress={() => router.push("(main)/(extra)/my-profile")}
            style={styles.editButton}
          >
            <FontAwesome name="pencil" size={18} color={Colors.nutralsBlack} />
          </Pressable>
        </Card>

        <Card style={styles.optionsCard}>
          <FlatList
            data={profileSections}
            keyExtractor={(_, index) => index.toString()}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <Pressable>
                <View style={styles.optionRow}>
                  <View style={styles.optionIcon}>{item.icon}</View>
                  <ThemedText type="default">{item.title}</ThemedText>
                </View>
              </Pressable>
            )}
          />
          <Button title="Logout" type="normal" style={{ marginTop: 8 }} />
        </Card>
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  headerText: {
    paddingHorizontal: 16,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
  },
  profileCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  avatarWrapper: {
    borderRadius: 999,
    width: 48,
    height: 48,
    borderColor: Colors.regentGray,
    borderWidth: 1,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  editButton: {
    backgroundColor: Colors.catskillWhite,
    height: 32,
    width: 32,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  optionsCard: {
    marginTop: 12,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 13,
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 1,
  },
  optionIcon: {
    backgroundColor: Colors.catskillWhite,
    height: 32,
    width: 32,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
