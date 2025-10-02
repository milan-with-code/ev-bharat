import BookingLayout from '@/screen/booking';
import { StyleSheet } from 'react-native';

export default function Page() {
    return (
        <BookingLayout />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
