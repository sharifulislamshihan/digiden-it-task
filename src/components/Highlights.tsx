import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Highlights = () => {
    const { weatherData } = useSelector((state: RootState) => state.weather);

    /*
    * Function to format the time based on the provided timestamp and timezone offset
    * Converts the timestamp to a Date object and formats it to a 12-hour time string
    * Returns the formatted time string with AM/PM
    */
    const formatTime = (timestamp: number, timezone: number) => {
        const date = new Date((timestamp + timezone) * 1000);
        const timeStr = date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
        // Split the time string into time and period (AM/PM) to resize it
        const [time, period] = timeStr.split(' ');
        return (
            <>
                {time} <span className="text-2xl">{period}</span>
            </>
        );
    };

    return (
        <div className="w-full">
            {weatherData && (
                <>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 font-poppins mb-4 animate-fade-in">
                        Today's Highlights
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-5">

                        {/* Humidity */}
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-4 shadow-xl animate-fade-in border-2 border-purple-300  border-y-purple-400 flex gap-5 items-center">
                            <img className='w-20' src="https://cdn-icons-png.flaticon.com/512/9290/9290540.png" alt="" />
                            <div>
                                <p className="text-sm text-gray-700 dark:text-gray-400 font-inter">Humidity</p>
                                <p className="text-5xl font-semibold text-gray-800 dark:text-gray-200 font-inter">
                                    {weatherData.main.humidity}%
                                </p>
                            </div>
                        </div>

                        {/* Pressure */}
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-4 shadow-xl animate-fade-in border-2 border-purple-300  border-y-purple-400 flex gap-5 items-center">
                            <img className='w-20' src="https://cdn-icons-png.flaticon.com/512/9743/9743844.png" alt="" />
                            <div>
                                <p className="text-sm text-gray-700 dark:text-gray-400 font-inter">Pressure</p>
                                <p className="text-5xl font-semibold text-gray-800 dark:text-gray-200 font-inter">
                                    {weatherData.main.pressure} <span className='text-2xl'>hPa</span>
                                </p>
                            </div>
                        </div>

                        {/* Wind Speed */}
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-4 shadow-xl animate-fade-in border-2 border-purple-300  border-y-purple-400 flex gap-5 items-center">
                            <img className='w-20' src="https://cdn-icons-png.freepik.com/256/12709/12709748.png?semt=ais_hybrid" alt="" />
                            <div>
                                <p className="text-sm text-gray-700 dark:text-gray-400 font-inter">Wind Speed</p>
                                <p className="text-5xl font-semibold text-gray-800 dark:text-gray-200 font-inter">
                                    {(weatherData.wind.speed * 3.6).toFixed(1)} <span className='text-2xl'>km/h</span>
                                </p>
                            </div>
                        </div>

                        {/* High/Low Temp */}
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-4 shadow-xl animate-fade-in border-2 border-purple-300  border-y-purple-400 flex gap-5 items-center">
                            <img className='w-20' src="https://cdn-icons-png.flaticon.com/512/11960/11960704.png" alt="" />
                            <div>
                                <p className="text-sm text-gray-700 dark:text-gray-400 font-inter">High/Low Temp</p>
                                <p className="text-5xl font-semibold text-gray-800 dark:text-gray-200 font-inter">
                                    {Math.round(weatherData.main.temp_max)}/{Math.round(weatherData.main.temp_min)} <span className='text-2xl'>°C</span>
                                </p>
                            </div>
                        </div>

                        {/* Sunrise */}
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-4 shadow-xl animate-fade-in border-2 border-purple-300  border-y-purple-400 flex gap-5 items-center">
                            <img className='w-20' src="https://cdn-icons-png.freepik.com/512/7672/7672760.png" alt="" />

                            <div>
                                <p className="text-sm text-gray-700 dark:text-gray-400 font-inter">Sunrise</p>
                                <p className="text-5xl font-semibold text-gray-800 dark:text-gray-200 font-inter">
                                    {formatTime(weatherData.sys.sunrise, weatherData.timezone / 3600 - new Date().getTimezoneOffset() / 60)}
                                </p>
                            </div>
                        </div>

                        {/* Sunset */}
                        <div className="bg-white/80 dark:bg-gray-800/80  rounded-2xl p-4 shadow-xl animate-fade-in border-2 border-purple-300  border-y-purple-400 flex gap-5 items-center">
                            <img className='w-20' src="https://cdn-icons-png.flaticon.com/512/9225/9225332.png" alt="" />
                            <div>
                                <p className="text-sm text-gray-700 dark:text-gray-400 font-inter">Sunset</p>
                                <p className="text-5xl font-semibold text-gray-800 dark:text-gray-200 font-inter">
                                    {formatTime(weatherData.sys.sunset, weatherData.timezone / 3600 - new Date().getTimezoneOffset() / 60)}
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Highlights;