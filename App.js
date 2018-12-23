import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,ScrollView,Dimensions } from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation';
import {createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

const { width } = Dimensions.get('window');
export default class App extends React.Component {
  render() {
    return (
<AppContainer/>
    );
  }
}
const CustomDrawerComponent = (props) =>(
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: 'white', height: 150,justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{width: 120, height: 120, borderRadius: 60 ,borderWidth: 1, borderColor: '#000',textAlign: 'center', paddingTop: 50}}>IMAGE</Text>
      </View>
    <ScrollView>
      <DrawerItems {...props}/>
    </ScrollView>
    </SafeAreaView>

);
const AppDrawerNavigator = createDrawerNavigator({
    Home: HomeScreen,
    Settings: SettingsScreen
},{
  contentComponent: CustomDrawerComponent,
    drawerWidth: width,
    contentOptions: {
      activeTintColor: 'orange'
    }
});

const AppContainer = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
