import ScreenWrapper from "@/components/ScreenWrapper";
import BackButton from "@/components/BackButton";
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { Button } from "@/components/Button";
import { router, usePathname } from "expo-router";
import { useState } from "react";
import Input from "@/components/Input";
import { useUserStore } from "@/store/useUserStore";

const AVATAR_SIZE = 100;
const ICON_SIZE = 40;

export default function MyProfile() {
    const { setUser, user } = useUserStore();
    const [name, setName] = useState<string>(user?.name || "");
    const [phone, setPhone] = useState<string>(user?.phone || "");
    const [email, setEmail] = useState<string>(user?.email || "");
    const [profilePictureUrl, setProfilePictureUrl] = useState<string>(
        user?.profilePictureUrl || ""
    );
    const [dateOfBirth, setDateOfBirth] = useState<string>(
        user?.dateOfBirth || ""
    );

    const pathName = usePathname();
    const isValidPath = pathName === "/my-profile";

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images", "videos"],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            const [asset] = result.assets;
            setProfilePictureUrl(asset.uri);
        }
    };

    const handleSubmit = () => {
        setUser({
            name,
            phone,
            email,
            profilePictureUrl: profilePictureUrl,
            dateOfBirth,
        });
        setEmail("");
        setName("");
        setPhone("");
        setDateOfBirth("");
        setProfilePictureUrl("");
        router.replace("/(main)/(tabs)/home");
    };

    return (
        <ScreenWrapper>
            <BackButton
                back={isValidPath}
                text={isValidPath ? "My Profile" : "Profile"}
                textOnly={!isValidPath}
                rightPosition={!isValidPath ? "Skip" : undefined}
                textStyle={!isValidPath ? styles.backButtonText : undefined}
                href={!isValidPath ? "/(main)/(tabs)/home" : undefined}
            />

            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "padding"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.avatarWrapper}>
                        {user?.profilePictureUrl && (
                            <Image
                                source={{ uri: profilePictureUrl || user.profilePictureUrl }}
                                style={styles.avatar}
                            />
                        )}
                        <Pressable onPress={pickImage} style={styles.iconButton}>
                            <Ionicons
                                name="camera-outline"
                                size={24}
                                color={Colors.nutralsBlack}
                            />
                        </Pressable>
                    </View>

                    <View style={styles.formWrapper}>
                        <Input
                            label="Full name"
                            placeholder="Enter your name"
                            value={name}
                            onChangeText={setName}
                        />
                        <Input
                            label="Phone Number"
                            placeholder="+91 9988776655"
                            value={phone}
                            onChangeText={setPhone}
                        />
                        <Input
                            label="Email"
                            placeholder="Markwillams@gmail.com"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <Input
                            label="Date of Birth"
                            placeholder="13/04/2000"
                            keyboardType="numeric"
                            value={dateOfBirth}
                            onChangeText={setDateOfBirth}
                        />
                    </View>
                </ScrollView>

                <View style={styles.bottomWrapper}>
                    <Button title="Continue" onPress={handleSubmit} />
                </View>
            </KeyboardAvoidingView>
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 16,
        paddingBottom: 50,
    },
    backButtonText: {
        paddingHorizontal: 16,
    },
    avatarWrapper: {
        alignItems: "center",
        marginVertical: 24,
        width: AVATAR_SIZE,
        height: AVATAR_SIZE,
        alignSelf: "center",
        borderColor: Colors.regentGray,
        borderWidth: 1,
        borderRadius: AVATAR_SIZE / 2,
        position: "relative",
    },
    avatar: {
        width: "100%",
        height: "100%",
        borderRadius: AVATAR_SIZE / 2,
    },
    iconButton: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: ICON_SIZE,
        height: ICON_SIZE,
        borderRadius: ICON_SIZE / 2,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderColor: Colors.regentGray,
        borderWidth: 1,
    },
    formWrapper: {
        gap: 12,
    },
    bottomWrapper: {
        backgroundColor: "white",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        justifyContent: "center",
    },
});
