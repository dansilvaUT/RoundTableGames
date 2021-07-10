import React from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const Dashboard = (props) => {
    console.log('dash', props)
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
});

const mapStateToProps = reduxState => {
    return {
        user: reduxState.userReducer.user
    }
}
export default connect(mapStateToProps)(Dashboard);