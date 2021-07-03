import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const Dashboard = () => {
    return (
        <View style={styles.container}>
            <Text>Dashboard</Text>
            <View>
                {/* GAMES RENDERED HERE PREVIEW */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default Dashboard;