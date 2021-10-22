import React, { FormEvent, memo } from 'react';
import IWeather from '../types/IWeather';

interface Props {
    cityList: IWeather[]
    getWeather: (event: FormEvent) => void;
    weatherTextRef: React.MutableRefObject<
    HTMLInputElement | undefined
  >;
}

const WeatherForm = ({ cityList, getWeather, weatherTextRef }: Props) => {
  console.log('WeatherForm');
  return (
    <form onSubmit={getWeather}>
      <select ref={weatherTextRef}>
          <option value="">Please selecte</option>
          {
             cityList.map((city, i) => {
                return (
                    <option value={city.id} key={city.id}>{city.name}</option>
                )
             }) 
          }
      </select>
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default memo(WeatherForm);
