import React from 'react';
import { StyleSheet, Text, View ,Button } from 'react-native';

export default class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Settings SCREEN</Text>
                <Button title='Press to toggle menu'
                onPress={() => this.props.navigation.openDrawer()}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
