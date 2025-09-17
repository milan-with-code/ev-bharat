
import React, { useEffect, useRef, useState } from "react";
import {
    Animated,
    Dimensions,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
    ViewStyle,
} from "react-native";

const { height } = Dimensions.get("window");

type SmoothModalProps = {
    visible: boolean;
    onClose: () => void;
    children: React.ReactNode;
    modalStyle?: ViewStyle;
};

export default function SmoothModal({
    visible,
    onClose,
    children,
    modalStyle,
}: SmoothModalProps) {
    const [showModal, setShowModal] = useState(visible);
    const translateY = useRef(new Animated.Value(height)).current;

    useEffect(() => {
        if (visible) {
            setShowModal(true);
            Animated.spring(translateY, {
                toValue: 0,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(translateY, {
                toValue: height,
                duration: 300,
                useNativeDriver: true,
            }).start(() => setShowModal(false));
        }
    }, [visible]);

    if (!showModal) return null;

    return (
        <TouchableWithoutFeedback onPress={onClose}>
            <View style={styles.overlay}>
                <TouchableWithoutFeedback>
                    <Animated.View
                        style={[styles.modal, { transform: [{ translateY }] }, modalStyle]}
                    >
                        {children}
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modal: {
        backgroundColor: "white",
        paddingVertical: 24,
        paddingHorizontal: 16,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        width: "100%",
    },
});
