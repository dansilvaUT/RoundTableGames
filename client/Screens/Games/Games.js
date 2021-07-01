import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const Games = () => {
    return (
        <View style={styles.container}>
            <Text>Games</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Games;