import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { WeatherData } from '../../types/weather';
import { getWeatherByCity } from '../../utils/api';

interface WeatherState {
    city: string;
    weatherData: WeatherData | null;
    loading: boolean;
    error: string | null;
}

const initialState: WeatherState = {
    city: '',
    weatherData: null,
    loading: false,
    error: null,
};

// This thunk fetches weather data for a given city.
export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (city: string, { rejectWithValue }) => {
        try {
            const response = await getWeatherByCity(city);
            return response;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.loading = false;
                state.weatherData = action.payload;
                state.city = action.meta.arg;
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default weatherSlice.reducer;