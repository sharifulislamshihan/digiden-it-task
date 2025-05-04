export interface WeatherData {
    name: string;
    sys: { 
        country: string; 
        sunrise: number; 
        sunset: number 
    };
    main: {
        temp: number;
        temp_max: number;
        temp_min: number;
        humidity: number;
        pressure: number;
        feels_like: number;
    };
    weather: [
        { 
            description: string; 
            icon: string 
        }
    ];
    wind: { 
        speed: number 
    };
    clouds: { 
        all: number 
    };
    visibility: number;
    timezone: number;
    dt: number;
}