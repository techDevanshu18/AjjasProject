import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";
import { Header } from "../../components/Header";

export const OtherComponent = ({ dayText, DateText, isActive, onPress }) => {
    const screenWidth = Dimensions.get('window').width;
    const img = require("../../assests/check.png");
    const calenderImg = require('../../assests/calender.png');

    return (
        <View style={styles.componentContainer}>
            <View style={styles.touchableContainer}>
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
            {dayText !== "Custom" && (
                <View style={{ ...styles.separator, width: screenWidth - 50 }} />
            )}
            {dayText === "Custom" && (
                <View style={styles.customContainer}>
                    <TouchableOpacity style={styles.calendarRow}>
                        <Image source={calenderImg} style={styles.calendarImage} />
                        <View style={styles.dateContainer}>
                            <Text style={styles.dateText}>Start Date</Text>
                            <Text style={styles.secondLineText}>Friday, Jan 5</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.calendarRow}>
                        <Image source={calenderImg} style={styles.calendarImage} />
                        <View style={styles.dateContainer}>
                            <Text style={styles.dateText}>End Date</Text>
                            <Text style={styles.secondLineText}>Thursday, Apr 4</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export const Other = () => {
    const [activeButton, setActiveButton] = useState(null);

    const handlePress = (dayText) => {
        setActiveButton(dayText);
    };

    return (
        <View style={styles.container}>
            {/* <Header /> */}
            <OtherComponent dayText={'This year'} DateText={"Jan 1 - Apr 20"} isActive={activeButton === "This year"} onPress={() => handlePress("This year")} />
            <OtherComponent dayText={'Previous year'} DateText={"Jan 1' 2023 - Dec 20'2023"} isActive={activeButton === "Previous year"} onPress={() => handlePress("Previous year")} />
            <OtherComponent dayText={'Lifetime'} DateText={"Apr 5' 2022 - Apr 20'2024"} isActive={activeButton === "Lifetime"} onPress={() => handlePress("Lifetime")} />
            <OtherComponent dayText={'Custom'} isActive={activeButton === "Custom"} onPress={() => handlePress("Custom")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    componentContainer: {
        padding: 10,
    },
    touchableContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
    separator: {
        borderWidth: 0.3,
        alignSelf: 'center',
        backgroundColor: '#ffffff',
    },
    customContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 10,
    },
    calendarRow: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.4,
        borderRadius: 10,
        borderColor: '#ffffff',
        height: 70,
        width: 160,
        padding: 5,
    },
    calendarImage: {
        width: 30,
        height: 30,
    },
    dateContainer: {
        marginLeft: 10,
    },
    dateText: {
        color: '#f3f3f3',
        fontSize: 14,
    },
    secondLineText: {
        fontSize: 12,
        color: "#ffffff",
    }
});
