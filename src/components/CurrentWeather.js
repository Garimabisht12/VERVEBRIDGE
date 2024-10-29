import WeatherIcon from './WeatherIcon';
import '../styles/components/CurrentWeather.scss';
import { useContext } from 'react';
import WeatherContext from '../context/weather.context';

function CurrentWeather({data}) {
    
    const {
        cloud_cover,
        feels_like,
        humidity,
        precipitation,
        summary,
        temperature,
        uv_index,
        visibility,
        wind,
    } = data;

    const {units} = useContext(WeatherContext)
    const otherInfoWidgets = [
        {
            id: 0,
            icon: 'droplet',
            name: 'Precipitation',
            value: Math.round(precipitation.total),
            unit: units.precipitation,
        },
        {
            id: 1,
            icon: 'wind',
            name: 'Wind',
            value: Math.round(wind.speed),
            unit: units.wind_speed,
        },
        {
            id: 2,
            icon: 'moisture',
            name: 'Humidity',
            value: Math.round(humidity),
            unit: units.humidity,
        },
        {
            id: 3,
            icon: 'sunglasses',
            name: 'UV Index',
            value: Math.round(uv_index),
            unit: units.uv_index,
        },
        {
            id: 4,
            icon: 'clouds-fill',
            name: 'Cloud Cover',
            value: Math.round(cloud_cover),
            unit: units.cloud_cover,
        },
        {
            id: 5,
            icon: 'eye',
            name: 'Visibility',
            value: Math.round(visibility),
            unit: units.visibility,
        }
    ];

    const icon_num = 5;

    return (
        <div className="CurrentWeather">
            <div className='temperature'>
                <div className='weather-icon'>
                    
                    <WeatherIcon iconNumber={icon_num} summary={icon_num}/>
                </div>
                <div className='value'>
                    <div className='real'>{temperature} {units.temperature}</div>
                    <div className='feels-like'>feels like {feels_like} {units.temperature}</div>
                    <div className='summary'>{summary}</div>
                </div>
            </div>
            <div className='other-infos'>
                {otherInfoWidgets.map((widget) => (
                    <div className='widget' key={widget.id}>
                        <div className='widget-container'>
                            <div className='info'>
                                <div className='icon'>
                                    <i className={`bi bi-${widget.icon}`}></i>
                                </div>
                                <div className='value'>
                                    {widget.value} {widget.unit}
                                </div>
                            </div>
                            <div className='name'>{widget.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CurrentWeather;
