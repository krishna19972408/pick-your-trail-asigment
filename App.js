/**
 *  Meetup RSVP React Native App
 *  App is design to let user registerd for MeetUp RSVP event,
 *  Entered info will help RSVP event committee to arrange transport accordingly
 * @format
 * @flow strict-local
 */

import React from 'react';

 import Registration from './src/screens/Registration.js';
 import SearchList from './src/screens/SearchList';
 import Details from './src/screens/Details';
 import Report from './src/screens/Report';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { APPComponent_COLOR, THEME_colors } from './styles/theme.styles.js';

const Drawer = createDrawerNavigator();

const App= () =>  {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContentOptions={{activeBackgroundColor:THEME_colors.SECONDARY_COLOR,activeTintColor:APPComponent_COLOR.Default_COLOR}} initialRouteName="Home">
        <Drawer.Screen name="Registration" component={Registration} />
        <Drawer.Screen name="Search List" component={SearchList} />
        <Drawer.Screen  name="Details" component={Details}  />
        <Drawer.Screen name="Report"  component={Report} />
      </Drawer.Navigator>
    </NavigationContainer>
    
  );
};



export default App;
