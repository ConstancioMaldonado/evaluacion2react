import React, { useState } from 'react'


const WeatherCards = ({ weather, temperature }) => {

    const [isCelsius, setIsCelsius] = useState(true)
    

   const handleChangeTemperature = () => setIsCelsius(!isCelsius)

    return (
        <article className='card'>
            <h1 className='card_title'>Weather App</h1>
            <h2 className='card_subtitle'>{weather?.name}, {weather?.sys.country}</h2>
            <section className='card_body'>
                <header className='card_img-container'>
                    <img className='card_img' src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
                </header>
                <article className='card_info'>
                    <h3 className='card_info-title'> {weather?.weather[0].description}</h3>
                    <ul className='card_info-body'>
                        <li className='card_info-item'><span className='card_info-label'>Wins Speed</span>{weather?.wind.speed}m/s</li>
                        <li className='card_info-item'><span className='card_info-label'>Clouds</span>{weather?.clouds.all}%</li>
                        <li className='card_info-item'><span className='card_info-label'>Pressure</span>{weather?.main.pressure}hPa</li>
                    </ul>
                </article>
            </section>
            <footer className='card_footer'>
                <h2 className='card_temperature'>
                    {
                    isCelsius
                    ? `${temperature?.celsius} ºC` 
                    : `${temperature?.farenheit} ºF` 
                    }
                </h2>
                <button className='card_btn' onClick={handleChangeTemperature}>Change to {isCelsius ? 'ºF' : 'ºC'}</button>
            </footer>
        </article>
    )
}

export default WeatherCards       