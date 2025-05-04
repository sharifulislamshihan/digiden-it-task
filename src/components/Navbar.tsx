import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../store/slices/weatherSlice';
import { FaLocationDot } from 'react-icons/fa6';

interface FormData {
    city: string;
}

const Navbar = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, reset } = useForm<FormData>();
    // State to manage dark mode
    const [isDark, setIsDark] = useState<boolean>(() => localStorage.getItem('theme') === 'dark');

    // Effect to set the initial theme based on local storage
    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    // Function to handle form submission for searching a city
    const onSubmit = ({ city }: FormData) => {
        if (city.trim()) {
            dispatch(fetchWeather(city) as any);
            reset();
        }
    };

    return (
        <nav className="w-full container mx-auto bg-blue-100 dark:bg-gray-900 backdrop-blur-md p-4 sm:pt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">

            {/* Location */}
            <div className="flex items-center gap-2">
                <FaLocationDot className="text-gray-800 dark:text-gray-200" />
                <div className="text-xs sm:text-sm font-normal text-gray-800 dark:text-gray-200 font-poppins">
                    Chittagong, Bangladesh
                </div>
            </div>


            {/* Search bar and mode toggle */}
            <div className="flex items-center gap-5 w-full sm:max-w-md sm:flex-1">
                <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 w-full sm:flex-1">
                    <input
                        {...register('city')}
                        placeholder="Search city..."
                        className="flex-1 p-2 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition font-inter text-sm min-w-[150px]"
                        aria-label="Search city"
                    />
                    <button
                        type="submit"
                        className="px-3 sm:px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-blue-600 transition font-inter text-xs sm:text-sm"
                    >
                        Search
                    </button>
                </form>
                <button
                    onClick={() => setIsDark(!isDark)}
                    className="p-2 w-12 rounded-full bg-white/50 dark:bg-gray-700/50 text-gray-800 dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-gray-600 transition"
                    aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                    {isDark ? '🌞' : '🌙'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;