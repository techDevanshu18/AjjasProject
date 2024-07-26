import { combineSlices, createSlice } from "@reduxjs/toolkit";
import { Data } from "../../screens/Data";

const backgroundSlice = createSlice({
    name: "backgroundSlice",
    initialState: {
        Data: Data,
        startTime: '',
        endTime: '',
        hours: '',
        minutes: '',
        dayText: '',
        weekText: '',
        date: '',
        averageDetails: []
    },
    reducers: {
        updateAverageDetails: (state, action) => {
            let config = action.payload;
            state.startTime = config.startTime;
            state.endTime = config.endTime;
            state.dayText = config.dayText;
            state.weekText = config.weekDay;
            state.date = config.date;
            const filteredData = state.Data.filter((item) =>
                item.startDate >= config.startTime && item.startDate <= config.endTime
            );
            if (filteredData.length > 0) {
                // Calculate total values
                const total = filteredData.reduce((acc, item) => {
                    acc.distance += item.distance;
                    acc.duration += item.duration;
                    acc.averageSpeed += item.averageSpeed;
                    acc.topSpeed += item.topSpeed;
                    acc.score += item.score;
                    return acc;
                }, { distance: 0, duration: 0, averageSpeed: 0, topSpeed: 0, score: 0 });

                // Calculate averages
                const averages = {
                    distance: (total.distance / filteredData.length).toFixed(2),
                    duration: total.duration / filteredData.length,
                    averageSpeed: (total.averageSpeed / filteredData.length).toFixed(2),
                    topSpeed: (total.topSpeed / filteredData.length).toFixed(2),
                    score: (total.score / filteredData.length).toFixed(2)
                };

                // Convert duration to timestamp
                const convertToTimestamp = (seconds) => {
                    const hours = Math.floor(seconds / 3600);
                    const minutes = Math.floor((seconds % 3600) / 60);
                    const secs = Math.floor(seconds % 60);
                    state.hours = hours
                    state.minutes = minutes
                    return `${hours}h ${minutes}m ${secs}s`;
                };

                averages.duration = convertToTimestamp(averages.duration);

                // Save to state
                state.averageDetails = averages;
            }
            else {
                state.averageDetails = {
                    distance: 0,
                    duration: 0,
                    averageSpeed: 0,
                    topSpeed: 0,
                    score: 0
                }
            }
        }
    }
})

export const { updateAverageDetails } = backgroundSlice.actions;
export default backgroundSlice.reducer;