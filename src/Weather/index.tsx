import React, {
    useState,
    useEffect,
    useRef,
    FormEvent,
    useCallback,
  } from 'react';

  import './styles.css';
  import WeatherForm from './WeatherForm';
  import WeatherDetail from './WeatherDetail';
  import IWeather from '../types/IWeather';
  
  interface Props {}
  
  const Weather = (params: Props) => {
    const [cityList, setCityList] = useState<IWeather[]>([]); 
    const [weatherDetail, setweatherDetail] = useState<IWeather>();
    
    const weatherTextRef = useRef<HTMLInputElement>();
  
    const loadData = useCallback(async (cityId: number) => {
        let reqParams = '';
        if (cityId > 0) {
            reqParams = `?id=${cityId}`;
        }
        try {
            const res = await fetch(
            `http://localhost:3000/weatherList${reqParams}`,
            );
            const list = await res.json();
            if (cityId > 0) {
              setweatherDetail(list[0]);
            }
            else {

            }
            setCityList(list);
      } catch (error) {}
    }, []);
  
    useEffect(() => {
      loadData(0);
    }, [loadData]);
  
    const getWeather = useCallback(async(cityId: number) => {
      await loadData(cityId);
    }, []);
  
    return (
      <div className="container">
        <h1 className="title">Weather App</h1>
        <WeatherForm
          cityList={cityList}
          getWeather={getWeather}
          weatherTextRef={weatherTextRef}
        />
        <WeatherDetail
          weatherDetail={weatherDetail}
        />
      </div>
    );
  };

  
  export default Weather;
  