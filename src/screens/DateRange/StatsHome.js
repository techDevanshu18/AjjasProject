import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Data } from "../Data";
import { useDispatch, useSelector } from "react-redux";
import { updateAverageDetails } from "../../networking/slice/BackgroundSlice";


export const StatsHome = () => {
    const calenderImg = require('../../assests/calender.png');
    const arrowRight = require('../../assests/arrowRight.png');
    const arrowLeft = require('../../assests/arrowLeft.png');
    const rightArrow = require('../../assests/rightArrow.png');
    const trendingDown = require('../../assests/trendingDown.png');
    const trendingUp = require('../../assests/trendingUp.png');
    const locationIcon = require('../../assests/locationIcon.png');
    const averageSpeed = require('../../assests/averageSpeed.png');
    const topSpeed = require('../../assests/topSpeed.png');
    const timerIcon = require('../../assests/timerIcon.png');
    const fuelCost = require('../../assests/fuelCost.png');
    const fuelConsumed = require('../../assests/fuelConsumed.png');

    const dispatch = useDispatch();

    const { averageDetails, hours, minutes, dayText, weekText, date } = useSelector((state) => state.backgroundSlice);

    useEffect(() => {
        dispatch(updateAverageDetails({
            period: "Last 3 Months",
            startTime: '1709231400000',
            endTime: '1718044200000',
            dayText: "Monday",
            weekDay: "1 March - May",
        }));
    }, [])

    const renderDetails = ({
        headerText,
        headerArrow,
        leftDetailText,
        rightDetailText,
        leftIcon,
        rightIcon,
        percentage,
        Vs,
        leftDetail,
        rightDetail,
        trendingImg1,
        trendignImg2
    }) => {
        return (
            <View style={styles.riding}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', marginBottom: 10 }}>
                    <Text style={styles.ridingText}>{headerText}</Text>
                    <Image source={headerArrow} style={styles.imageContainer} />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={leftIcon} style={styles.imageContainer} />
                            <Text style={{ fontSize: 12, color: "#FFFFFFA6" }}>{leftDetailText}</Text>
                        </View>
                        {leftDetail}
                        <View style={{ flexDirection: 'row', padding: 5 }}>
                            <Image source={trendingImg1} style={styles.imageContainer} color='#D24343' />
                            <Text style={{ fontSize: 12, color: '#D24343' }}>{percentage}</Text>
                            <Text style={{ fontSize: 12, color: "#ffffff" }}>{Vs}</Text>
                        </View>
                    </View>
                    <View style={{borderWidth:0.5,borderColor:"#ffffff",margin:5}}></View>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={rightIcon} style={styles.imageContainer} />
                            <Text style={{ fontSize: 12, color: "#FFFFFFA6" }}>{rightDetailText}</Text>
                        </View>
                        {rightDetail}
                        <View style={{ flexDirection: 'row', padding: 5 }}>
                            <Image source={trendignImg2} style={styles.imageContainer} color='#D24343' />
                            <Text style={{ fontSize: 12, color: '#D24343' }}>{percentage}</Text>
                            <Text style={{ fontSize: 12, color: "#ffffff" }}>{Vs}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    };
    const navigation = useNavigation();
    const handleDateRange = () => {
        navigation.navigate("DateRangeNavigator")
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerUpperText}>Statistics</Text>
                <View style={[styles.headerCalenderView, { justifyContent: 'space-between' }]}>
                    <TouchableOpacity style={styles.headerCalenderView}
                        onPress={handleDateRange}
                    >
                        <Image source={calenderImg} style={[styles.imageContainer, { marginRight: 10 }]} />
                        <View>
                            <Text style={styles.headerLowerText}>{weekText} {date} ({dayText})</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.headerCalenderView}>
                        <Image source={arrowLeft} style={[styles.imageContainer, { marginRight: 15 }]} />
                        <Image source={arrowRight} style={styles.imageContainer} />
                    </View>
                </View>
            </View>

            <View style={styles.miniContainer}>
                <View style={styles.riding}>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', marginBottom: 10 }}>
                        <Text style={styles.ridingText}>Riding Behaviour</Text>
                        <Image source={rightArrow} style={styles.imageContainer} />
                    </View>
                    <View style={styles.ridingInnerContainer}>
                        <View style={{ flex: 0.7, flexDirection: 'row', borderWidth: 1, borderRadius: 5, borderColor: '#259DFE' }}>
                            <View style={{ flex: 0.8, backgroundColor: '#259DFE', padding: 3, alignItems: 'center' }}>
                                <Text style={{ fontSize: 16, color: "#ffffff" }}>91%</Text>
                            </View>
                            <View style={{alignItems:'center',justifyContent:'center',padding:3}}>
                                <Text style={{ fontSize: 16, color: "#ffffff" }}>Excellent</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', padding: 5 }}>
                            <Image source={trendingDown} style={styles.imageContainer} color='#D24343' />
                            <Text style={{ fontSize: 12, color: '#D24343' }}>24%</Text>
                            <Text style={{ fontSize: 12, color: "#ffffff" }}>vs preceding period</Text>
                        </View>
                    </View>
                </View>

                {renderDetails({
                    headerText: "Journey",
                    headerArrow: rightArrow,
                    leftDetailText: "Distance Travelled",
                    rightDetailText: "Time Duration",
                    leftIcon: locationIcon,
                    rightIcon: timerIcon,
                    percentage: "24%",
                    Vs: "vs preceding period",
                    trendingImg1:trendingDown,
                    trendignImg2:trendingDown,
                    leftDetail: (
                        <Text style={{ fontSize: 20, color: "#ffffff" }}>
                            {averageDetails.distance}<Text style={{ fontSize: 14 }}>km</Text>
                        </Text>
                    ),
                    rightDetail: (
                        <Text style={{ fontSize: 20, color: "#ffffff" }}>
                            {hours}<Text style={{ fontSize: 14 }}>hr</Text>{minutes}<Text style={{ fontSize: 14 }}>min</Text>
                        </Text>
                    ),
                })}

                {renderDetails({
                    headerText: "Speed",
                    headerArrow: rightArrow,
                    leftDetailText: "Average Speed",
                    rightDetailText: "Top Speed",
                    leftIcon: averageSpeed,
                    rightIcon: topSpeed,
                    percentage: "24%",
                    Vs: "vs preceding period",
                    trendingImg1:trendingDown,
                    trendignImg2:trendingUp,
                    leftDetail: (
                        <Text style={{ fontSize: 20, color: "#ffffff" }}>
                            {averageDetails.averageSpeed}<Text style={{ fontSize: 14 }}>km/hr</Text>
                        </Text>
                    ),
                    rightDetail: (
                        <Text style={{ fontSize: 20, color: "#ffffff" }}>
                            {averageDetails.topSpeed}<Text style={{ fontSize: 14 }}>km/hr</Text>
                        </Text>
                    ),
                })}

                {renderDetails({
                    headerText: "Fuel",
                    headerArrow: rightArrow,
                    leftDetailText: "Fuel Consumed",
                    rightDetailText: "Fuel Cost",
                    leftIcon: fuelConsumed,
                    rightIcon: fuelCost,
                    percentage: "24%",
                    Vs: "vs preceding period",
                    trendingImg1:trendingDown,
                    trendignImg2:trendingDown,
                    leftDetail: (
                        <Text style={{ fontSize: 20, color: "#ffffff" }}>
                            3.01<Text style={{ fontSize: 14 }}>L</Text>
                        </Text>
                    ),
                    rightDetail: (
                        <Text style={{ fontSize: 20, color: "#ffffff" }}>
                            <Text style={{ fontSize: 12 }}>Rs</Text>248<Text style={{ fontSize: 14 }}></Text>
                        </Text>
                    ),
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'space-between'
    },
    header: {
        flex: 0.2,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 10,
        backgroundColor: '#1A1A1A',
        justifyContent: 'space-around'
    },
    headerUpperText: {
        color: "#ffffff",
        fontSize: 24,
        fontWeight: "400",
    },
    imageContainer: {
        resizeMode: 'contain',
        height: 16,
        width: 16,
        marginRight: 5
    },
    headerCalenderView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerLowerText: {
        fontSize: 16,
        color: "#ffffff"
    },
    miniContainer: {
        flex: 0.8,
        justifyContent: 'space-around',
        padding: 20
    },
    riding: {
        flex: 0.2,
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: 'space-around',
        backgroundColor: '#1A1A1A',
        borderColor: "#494848",
        padding: 10
    },
    ridingText: {
        fontSize: 18,
        color: "#f3f3f3"
    },
    ridingInnerContainer: {
        flex: 1,
        height: 70,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-evenly',
        borderWidth: 1,
        borderColor: "#494848",
        borderRadius: 10,
    }
});
