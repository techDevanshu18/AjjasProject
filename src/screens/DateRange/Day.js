import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";

const DayComponent = ({ dayText, weekDay, DateText, isActive, onPress }) => {
    const screenWidth = Dimensions.get('window').width;
    const img = require("../../assests/check.png");

    return (
        <View style={{ padding: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity style={[styles.dayContainer, isActive && styles.activeButton]} onPress={onPress}>
                    <Text style={{ ...styles.dayText, color: isActive ? '#FFBE00' : '#f3f3f3' }}>{dayText}</Text>
                    <Text style={styles.week_DateText}>{weekDay}, {DateText}</Text>
                </TouchableOpacity>
                {isActive && (
                    <View style={styles.imgContainer}>
                        <Image source={img} style={styles.image} />
                    </View>
                )}
            </View>
            {dayText !== 'Day before yesterday' ?
                <View style={{ borderWidth: 0.3, width: screenWidth - 50, alignSelf: 'center', backgroundColor: '#ffffff' }}>
                </View>
                : null
            }
        </View>
    );
};

export const Day = ({ setStartTime, setEndTime, setDayText, setWeekDay, setDate }) => {
    const [activeButton, setActiveButton] = useState(null);

    const handlePress = (dayText, startTimeValue, endTimeValue, weekValue, dateValue) => {
        setActiveButton(dayText);
        setStartTime(startTimeValue);
        setEndTime(endTimeValue);
        setDayText(dayText);
        setWeekDay(weekValue);
        setDate(dateValue);
    };

    return (
        <View style={styles.container}>
            <DayComponent
                dayText={'Today'}
                weekDay={"Friday"}
                DateText={"April 5"}
                isActive={activeButton === 'Today'}
                onPress={() => handlePress('Today', '1712341800000', '1712341800000', "Friday", "April 5")}
            />
            <DayComponent
                dayText={'Yesterday'}
                weekDay={"Thursday"}
                DateText={"April 4"}
                isActive={activeButton === 'Yesterday'}
                onPress={() => handlePress('Yesterday', '1712255400000', '1712255400000', "Thursday", "April 4")}
            />
            <DayComponent
                dayText={'Day before yesterday'}
                weekDay={"Wednesday"}
                DateText={"April 3"}
                isActive={activeButton === 'Day before yesterday'}
                onPress={() => handlePress('Day before yesterday', '1712169000000', '1712169000000', "Wednesday", "April 3")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    dayContainer: {
        padding: 10,
        borderRadius: 5,
    },
    activeButton: {
        // backgroundColor: '#333333',
    },
    dayText: {
        fontSize: 14,
        fontWeight: '400',
    },
    week_DateText: {
        fontSize: 14,
        color: '#ffffff',
    },
    imgContainer: {
        height: 20,
        width: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 20,
        width: 20,
        tintColor: '#FFBE00',
    },
});
