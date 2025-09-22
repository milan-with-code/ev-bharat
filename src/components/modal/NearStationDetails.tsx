import { View, Modal, Pressable, StyleSheet, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { ThemedText } from '../ThemedText';
import { Colors } from '@/constants/Colors';

type CustomModalProps = {
    visible: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
};

export default function NearStationDetailsModal({ visible, onClose, title, children }: CustomModalProps) {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: visible ? 1 : 0,
            duration: 400,
            useNativeDriver: true,
        }).start();
    }, [visible]);

    return (
        <Modal
            animationType="none"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
            statusBarTranslucent
        >
            <Animated.View style={[styles.modalOverlay, { opacity: fadeAnim }]}>
                <View style={styles.modalContent}>
                    {title && <ThemedText type="label" fontVariant="semiBold">{title}</ThemedText>}
                    <View style={{ marginTop: 10 }}>{children}</View>
                    <Pressable style={styles.closeButton} onPress={onClose}>
                        <ThemedText color="white">Close</ThemedText>
                    </Pressable>
                </View>
            </Animated.View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.3)",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    modalContent: {
        width: "100%",
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
    closeButton: {
        marginTop: 20,
        backgroundColor: Colors.primary,
        paddingVertical: 8,
        borderRadius: 6,
        alignItems: "center",
    },
});

