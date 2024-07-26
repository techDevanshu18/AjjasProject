import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";
import { updateAverageDetails } from '../../networking/slice/BackgroundSlice'
import { Header } from "../../components/Header";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export const WeekComponent = ({ dayText, weekDay, DateText, isActive, onPress }) => {
    const screenWidth = Dimensions.get('window').width;
    const img = require("../../assests/check.png");

    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity style={[styles.dayContainer, isActive && styles.activeButton]}
                    onPress={onPress}>
                    <Text style={{ ...styles.dayText, color: isActive ? '#FFBE00' : '#f3f3f3' }}>{dayText}</Text>
                    <Text style={styles.week_DateText}>{DateText}</Text>
                </TouchableOpacity>
                {isActive && (
                    <View style={styles.imgContainer}>
                        <Image source={img} style={styles.image} />
                    </View>
                )}
            </View>
            {dayText !== 'Last 7 days' ?
                <View style={{ borderWidth: 0.3, width: screenWidth - 50, alignSelf: 'center', backgroundColor: '#ffffff' }}>
                </View>
                : null
            }
        </View>
    );
};

export const Week = ({ setStartTime, setEndTime, setDayText, setDate }) => {
    const [activeButton, setActiveButton] = useState(null);

    const handlePress = (dayText, startTimeValue, endTimeValue, dateValue) => {
        setActiveButton(dayText);
        setStartTime(startTimeValue);
        setEndTime(endTimeValue);
        setDayText(dayText);
        setDate(dateValue);
    };

    return (
        <View style={styles.container}>
            <WeekComponent
                dayText={'This Week'}
                DateText={"Mar 31 - Apr 6"}
                isActive={activeButton === 'This Week'}
                onPress={() => handlePress('This Week', '1711909800000', '1712341800000', "Mar 31 - Apr 6")}
            />
            <WeekComponent
                dayText={'Last Week'}
                DateText={"Mar 24 - Mar 30"}
                isActive={activeButton === 'Last Week'}
                onPress={() => handlePress('Last Week', '1711218600000', '1711823400000', "Mar 24 - Mar 30")}
            />
            <WeekComponent
                dayText={'Last 7 days'}
                DateText={"Mar 29 - Apr 4"}
                isActive={activeButton === 'Last 7 days'}
                onPress={() => handlePress('Last 7 days', '1711737000000', '1712169000000', "Mar 29 - Apr 4")}
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
