import { ThemedText } from '@/components/ThemedText';
import { StyleSheet, View } from 'react-native';

export default function Page() {
    return (
        <View style={styles.container}>
            <ThemedText>Open up Profile.tsx to start working on your app!</ThemedText>
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
