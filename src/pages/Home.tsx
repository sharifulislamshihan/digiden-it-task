import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import WeatherDisplay from '../components/WeatherDisplay';
import Highlights from '../components/Highlights';
import SearchHistory from '../components/SearchHistory';
import { fetchWeather } from '../store/slices/weatherSlice';
import { RootState } from '../store/store';

interface HistoryItem {
    city: string;
    temp: number;
    icon: string;
    description: string;
}

const Home = () => {
    const dispatch = useDispatch();
    const { weatherData, loading, error } = useSelector((state: RootState) => state.weather);

    // Initialize search history from localStorage or set to empty array
    const [searchHistory, setSearchHistory] = useState<HistoryItem[]>(() => {
        const saved = localStorage.getItem('searchHistory');
        return saved ? JSON.parse(saved) : [];
    });

    // Fetch weather for Chittagong on initial load
    useEffect(() => {
        dispatch(fetchWeather('Chittagong') as any);
    }, [dispatch]);

    // Update search history automatically after a successful fetch
    useEffect(() => {
        if (weatherData && !loading && !error) {
            const newItem: HistoryItem = {
                city: weatherData.name,
                temp: weatherData.main.temp,
                icon: weatherData.weather[0].icon,
                description: weatherData.weather[0].description,
            };
            const existing = searchHistory.filter(item => item.city !== newItem.city);
            const updatedHistory = [newItem, ...existing].slice(0, 7); // Limit to 7 cards/city
            setSearchHistory(updatedHistory);
            localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
        }
    }, [weatherData, loading, error]);

    // Handle clicking a history item to fetch weather
    const handleHistoryClick = (city: string) => {
        dispatch(fetchWeather(city) as any);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-teal-100 dark:from-gray-900 dark:to-gray-800 font-inter">
            <Navbar />
            <main className="container mx-auto p-4 flex flex-col gap-10 pt-5">
                <WeatherDisplay />
                <Highlights />
                <SearchHistory history={searchHistory} onHistoryClick={handleHistoryClick} />
            </main>
        </div>
    );
};

export default Home;