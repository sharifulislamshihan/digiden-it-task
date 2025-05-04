import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import Spinner from './spinner';


const WeatherDisplay = () => {
    const { weatherData, loading, error } = useSelector((state: RootState) => state.weather);

    return (
        <div className="w-full px-4">
            {loading ? (
                <Spinner />
            ) : error ? (

                // Error message when city is not found or any other error occurs
                <div className="w-full max-w-md mx-auto bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900 dark:to-red-800 rounded-2xl p-8 shadow-lg text-center animate-fade-in">
                    <h2 className="text-2xl font-bold text-red-600 dark:text-red-300 font-poppins mb-3">
                        Oops! City Not Found
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 font-inter leading-relaxed">
                        It seems the city you entered doesn't exist or there was an issue. Please try again with
                        a valid city name.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-6 px-6 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 font-inter text-sm hover:shadow-lg"
                    >
                        Refresh
                    </button>
                </div>
            ) : weatherData ? (

                // Weather data display when city is found
                <div
                    className="w-full max-w-xl mx-auto bg-gradient-to-br from-blue-200 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 backdrop-blur-sm border border-purple-200/50 animate-fade-in dark:border-2 dark:border-purple-400 flex flex-col-reverse md:flex-row-reverse gap-7 md:gap-14 justify-center md:justify-around py-10 items-center"
                    style={{ boxShadow: '0 0 20px rgba(128, 90, 213, 0.4)' }}
                >
                    {/* City and country name */}
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg xl:text-xl font-bold text-gray-800 dark:text-gray-200 font-poppins">
                            {weatherData.name}, {weatherData.sys.country}
                        </h2>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="relative">
                            <img
                                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                                alt={weatherData.weather[0].description}
                                className="w-30"
                            />
                        </div>
                        <div className="space-y-2">
                            <p className=" text-5xl lg:text-7xl font-semibold text-gray-800 dark:text-gray-200 font-inter tracking-tight">
                                {Math.round(weatherData.main.temp)}°C
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 font-inter">
                                Feels like {Math.round(weatherData.main.feels_like)}°C
                            </p>
                            <p className="capitalize text-lg text-gray-700 dark:text-gray-300 font-inter font-medium">
                                {weatherData.weather[0].description}
                            </p>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default WeatherDisplay;