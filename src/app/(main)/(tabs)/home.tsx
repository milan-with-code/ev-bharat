import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

export default function Page() {
    return (
        <ThemedView style={styles.container}>
            <ThemedText>Open up Home.tsx to start working on your app!</ThemedText>
            <StatusBar style="auto" />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
