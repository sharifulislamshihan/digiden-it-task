interface HistoryItem {
    city: string;
    temp: number;
    icon: string;
    description: string;
}

interface SearchHistoryProps {
    history: HistoryItem[];
    onHistoryClick: (city: string) => void;
}

const SearchHistory = ({ history, onHistoryClick }: SearchHistoryProps) => {

    // Only show cards if history has valid data
    const hasValidHistory = history.length > 0 && history.every(item => !isNaN(item.temp));

    if (!hasValidHistory) return null;

    return (
        <div className="w-full">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 font-poppins mb-4 animate-fade-in">
                Recent Searches
            </h3>
            <div className="flex overflow-x-auto space-x-4 pb-2 mx-5">
                {history.map((item) => (
                    <button
                        key={item.city}
                        onClick={() => onHistoryClick(item.city)}
                        className="flex-shrink-0 w-48 bg-gradient-to-br from-purple-300 to-purple-50 dark:from-gray-800 dark:to-gray-700 backdrop-blur-md rounded-lg p-4 shadow-md transition animate-fade-in "
                        aria-label={`Search weather for ${item.city}`}
                    >
                        <div className="flex items-center gap-2">
                            <img
                                src={`http://openweathermap.org/img/wn/${item.icon}.png`}
                                alt={item.description}
                                className="w-[72px] h-[72px]"
                            />
                            <div className="text-left">
                                <p className="text-sm font-medium text-gray-800 dark:text-gray-200 font-inter">
                                    {item.city}
                                </p>
                                <p className="text-3xl font-semibold text-gray-800 dark:text-gray-200 font-inter">
                                    {Math.round(item.temp)}°C
                                </p>
                                <p className="text-xs capitalize text-gray-600 dark:text-gray-400 font-inter">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SearchHistory;