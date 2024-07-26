import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Day } from "../../screens/DateRange/Day";
import { Week } from "../../screens/DateRange/Week";
import { Month } from "../../screens/DateRange/Month";
import { Other } from "../../screens/DateRange/Other";
import { Header } from "../../components/Header";

export const DateRangeNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Header"
                component={Header}
                options={{
                    headerShown: false,
                    title: 'Date Range',
                }}
            />
            <Stack.Screen
                name="Day"
                component={Day}
                options={{
                    headerShown: false,
                    title: 'Date Range',
                }}
            />
            <Stack.Screen
                name="Week"
                component={Week}
                options={{
                    headerShown: false,
                    title: 'Date Range',
                }}
            />
            <Stack.Screen
                name="Month"
                component={Month}
                options={{
                    headerShown: false,
                    title: 'Date Range',
                }}
            />
            <Stack.Screen
                name="Other"
                component={Other}
                options={{
                    headerShown: false,
                    title: 'Date Range',
                }}
            />
        </Stack.Navigator>
    )
}