import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home, List} from '../screens'

const Stack = createStackNavigator();

const headerStyle={headerStyle:{
  backgroundColor: '#252525',
  
},
headerTintColor:'#FFF'
}

function Navigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={headerStyle} />
          <Stack.Screen name="List" component={List} options={headerStyle}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  export default Navigation