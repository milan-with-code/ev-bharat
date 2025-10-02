import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function BookingStatusPage() {
    const { status } = useLocalSearchParams<{ status: string }>();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Showing bookings for: {status}</Text>
        </View>
    );
}
