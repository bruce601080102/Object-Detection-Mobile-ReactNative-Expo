import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import Detail from '../screens/Detail'
import Settings from '../screens/Settings'

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                gestureEnabled: false,
                headerStyle: {
                    backgroundColor: '#4F4F4F'
            },
            headerTitleStyle: {
                fontWeight: 'bold'
            },
            headerTintColor: '#FFFFFF',
            headerBackTitleVisible: false,
            }}
            headerMode='float'>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{ title: '移動設備檢測系統' }}
            />
            <Stack.Screen
                name='Detail'
                component={Detail}
                options={{ title: '檢測系統' }}
                //options={({ route }) => ({
                //title: route.params.item.name })}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator