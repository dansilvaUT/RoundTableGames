import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const Game = () => {
    return (
        <View style={styles.container}>
            <Text>Game</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Game;