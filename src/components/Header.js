import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Day } from "../screens/DateRange/Day";
import { Week } from "../screens/DateRange/Week";
import { Month } from "../screens/DateRange/Month";
import { Other } from "../screens/DateRange/Other";
import { updateAverageDetails } from '../networking/slice/BackgroundSlice';

const Box = ({ header, isActive, onPress }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.headerButton, isActive ? styles.activeButton : styles.inactiveButton]}
            onPress={onPress}
        >
            <Text style={[styles.headerText, isActive ? styles.activeText : styles.inactiveText]}>
                {header}
            </Text>
        </TouchableOpacity>
    );
};

export const Header = () => {
    const crossIcon = require('../assests/crossIcon.png');
    const [head, setHead] = useState("Day");
    const [dayVisible, setDayVisible] = useState(true);
    const [weekVisible, setWeekVisible] = useState(false);
    const [monthVisible, setMonthVisible] = useState(false);
    const [otherVisible, setOtherVisible] = useState(false);
    const [activeButton, setActiveButton] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [dayText, setDayText] = useState(null);
    const [weekDay, setWeekDay] = useState(null);
    const [date, setDate] = useState(null);

    const navigation = useNavigation();
    const dispatch = useDispatch();

    useEffect(() => {
        setActiveButton(head);
        switch (head) {
            case "Day":
                setDayVisible(true);
                setWeekVisible(false);
                setMonthVisible(false);
                setOtherVisible(false);
                break;
            case "Week":
                setDayVisible(false);
                setWeekVisible(true);
                setMonthVisible(false);
                setOtherVisible(false);
                break;
            case "Month":
                setDayVisible(false);
                setWeekVisible(false);
                setMonthVisible(true);
                setOtherVisible(false);
                break;
            case "Other":
                setDayVisible(false);
                setWeekVisible(false);
                setMonthVisible(false);
                setOtherVisible(true);
                break;
            default:
                setDayVisible(false);
                setWeekVisible(false);
                setMonthVisible(false);
                setOtherVisible(false);
                break;
        }
        setActiveButton(head);
    }, [head]);

    const handleDateRange = () => {
        navigation.navigate("StatsHome");
    };

    const handleSave = () => {
        if (startTime && endTime && dayText || weekDay && date) {
            dispatch(updateAverageDetails({ dayText, startTime, endTime, weekDay, date }));
            navigation.navigate("StatsHome");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.firstContainer}>
                    <TouchableOpacity
                        onPress={handleDateRange}
                        style={styles.dateRangeButton}
                    >
                        <Image source={crossIcon} style={styles.image} />
                        <Text style={styles.dateRangeText}>Data Range</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSave}>
                        <Text style={styles.saveText}>Save</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.secondContainer}>
                    <Box
                        header="Day"
                        isActive={activeButton === 'Day'}
                        onPress={() => setHead('Day')}
                    />
                    <Box
                        header="Week"
                        isActive={activeButton === 'Week'}
                        onPress={() => setHead('Week')}
                    />
                    <Box
                        header="Month"
                        isActive={activeButton === 'Month'}
                        onPress={() => setHead('Month')}
                    />
                    <Box
                        header="Other"
                        isActive={activeButton === 'Other'}
                        onPress={() => setHead('Other')}
                    />
                </View>
            </View>
            {dayVisible ? <Day setStartTime={setStartTime} setEndTime={setEndTime} setDayText={setDayText} setWeekDay={setWeekDay} setDate={setDate} /> : null}
            {weekVisible ? <Week setStartTime={setStartTime} setEndTime={setEndTime} setDayText={setDayText} setDate={setDate} /> : null}
            {monthVisible ? <Month setStartTime={setStartTime} setEndTime={setEndTime} setDayText={setDayText} setDate={setDate} /> : null}
            {otherVisible ? <Other /> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        justifyContent: "space-around",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    headerContainer: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: 'red',
        borderWidth: 2,
        height: 140,
        justifyContent: "space-around",
    },
    headerButton: {
        borderWidth: 1,
        borderColor: 'transparent',
        padding: 10,
    },
    firstContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    secondContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: '#1A1A1A',
    },
    activeButton: {
        borderBottomColor: '#FFBE00',
        borderBottomWidth: 3,
    },
    inactiveButton: {
        borderBottomColor: 'transparent',
        borderBottomWidth: 0,
    },
    headerText: {
        fontSize: 14,
    },
    activeText: {
        color: '#FFBE00',
    },
    inactiveText: {
        color: '#ffffff',
    },
    image: {
        height: 20,
        width: 20,
    },
    dateRangeButton: {
        flex: 0.35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    dateRangeText: {
        color: '#ffffff',
    },
    saveText: {
        color: '#ffffff',
    },
});
