import React, { memo } from 'react';
import IWeather from '../types/IWeather';

interface Props {
    weatherDetail: IWeather;
}

const WeatherDetail = ({ weatherDetail }: Props) => {
  console.log('weatherDetail');
  return (
    <div className="list">
      <div>Name: {weatherDetail.name}</div>
      <div>Temparature: {weatherDetail.temparature}</div>
    </div>
  );
};

export default memo(WeatherDetail);
