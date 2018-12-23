import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {DrawerActions} from 'react-navigation-drawer';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        drawerIcon: ({tintColor}) => (
            <Icon name='ios-home' style={{fontSize: 24, color: tintColor}}/>
        )
    };
    handleClick = () => {
        alert('test');
        console.log('test');
        ;
    };

    render() {
        return (
            <SafeAreaView>
                <View style={{height: 200}}>
                    <Icon name='ios-menu'
                          size={30}
                          style={{padding: 10}}
                          onPress={() => this.props.navigation.openDrawer()}
                    />
                </View>
            </SafeAreaView>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
