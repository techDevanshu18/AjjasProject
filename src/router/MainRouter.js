import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { StatsHome } from "../screens/DateRange/StatsHome";
import { DateRangeNavigator } from "./DateRange.js/DateRangeNavigator";
import { Practice } from "../Practice";

export const MainRouter = () => {
    const Stack = createNativeStackNavigator();

    const headerRightButton = () => (
        <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerButtonText}>Save</Text>
        </TouchableOpacity>
    );

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#1A1A1A',
                    },
                    headerTitleStyle: {
                        color: '#FFFFFF',
                    },
                    headerRight: headerRightButton,
                }}
            >
                <Stack.Screen
                    name="StatsHome"
                    component={StatsHome}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="DateRangeNavigator"
                    component={DateRangeNavigator}
                    options={{
                        headerShown: false
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    headerButton: {
        marginRight: 10,
    },
    headerButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});
