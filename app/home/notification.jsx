import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useNotifications } from '../../app-context/index';

const Notification = () => {
    const { notifications } = useNotifications();

    useEffect(() => {
        console.log("Thông báo hiện tại:", notifications); // Kiểm tra logs
    }, [notifications]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lịch sử thanh toán</Text>
            {notifications.length > 0 ? (
                <FlatList
                    data={notifications}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.notificationItem}>
                            <Text style={styles.message}>{item.message}</Text>
                        </View>
                    )}
                />
            ) : (
                <Text style={styles.noNotifications}>Không có thông báo nào</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0c0f14',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    notificationItem: {
        backgroundColor: '#1e2328',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
    message: {
        fontSize: 16,
        color: '#d17842',
    },
    noNotifications: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default Notification;
