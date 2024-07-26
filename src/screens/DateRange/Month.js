import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components/Header";
import { updateAverageDetails } from '../../networking/slice/BackgroundSlice';

export const MonthComponent = ({ dayText, DateText, isActive, onPress }) => {
    const screenWidth = Dimensions.get('window').width;
    const img = require("../../assests/check.png");

    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity style={[styles.dayContainer, isActive && styles.activeButton]} onPress={onPress}>
                    <Text style={{ ...styles.dayText, color: isActive ? '#FFBE00' : '#f3f3f3' }}>{dayText}</Text>
                    <Text style={styles.week_DateText}>{DateText}</Text>
                </TouchableOpacity>
                {isActive && (
                    <View style={styles.imgContainer}>
                        <Image source={img} style={styles.image} />
                    </View>
                )}
            </View>
            {dayText !== "Last 30 Days" ?
                <View style={{ borderWidth: 0.3, width: screenWidth - 50, alignSelf: 'center', backgroundColor: '#ffffff' }}>
                </View>
                : null
            }
        </View>
    );
};

export const Month = ({ setStartTime, setEndTime, setDayText, setDate }) => {
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
            {/* <Header onSave={handleSave} /> */}
            <MonthComponent
                dayText={'This Month'}
                DateText={"April"}
                isActive={activeButton === 'This Month'}
                onPress={() => handlePress('This Month', '1711996200000', '1714501800000', "April")}
            />
            <MonthComponent
                dayText={'Last Month'}
                DateText={"March"}
                isActive={activeButton === 'Last Month'}
                onPress={() => handlePress('Last Month', '1711823400000', '1709231400000', "March")}
            />
            <MonthComponent
                dayText={'Last 30 Days'}
                DateText={"Mar 6 - Apr 4"}
                isActive={activeButton === 'Last 30 Days'}
                onPress={() => handlePress('Last 30 Days', '1711996200000', '1714501800000', "Mar 6 - Apr 4")}
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
