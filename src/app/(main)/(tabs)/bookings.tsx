import { ThemedText } from '@/components/ThemedText';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export default function Page() {
    return (
        <View style={styles.container}>
            <ThemedText>Open up Bookings.tsx to start working on your app!</ThemedText>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
