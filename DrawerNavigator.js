import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Home from "../screens/Home";
import CustomSideBarMenu  from './CustomSideBarMenu';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={StackNavigator} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;