import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from "../screens/Home";
import Updates from "../screens/Updates";
import Search from "../screens/Search";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    }
                     else if (route.name === 'Languages') {
                        iconName = focused ? 'search' : 'search-outline';
                    }
                    else if (route.name === 'Updates') {
                        iconName = focused  ? 'trending-up' : 'trending-up-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Languages" component={Search} />
            <Tab.Screen name="Updates" component={Updates} />
            
        </Tab.Navigator>
    );
}

export default BottomTabNavigator