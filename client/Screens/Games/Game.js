import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

const Game = () => {
    return (
        <View style={styles.container}>
            <Text>Game</Text>
            <View>
                <Image />
                <View>
                    <Text>Content</Text>
                    <Text>Rating</Text>
                    <Text>Comments...thread</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Game;