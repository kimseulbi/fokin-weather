import React, { Component } from 'react'
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import axios from "axios";
import Loading from './Loading';
import Weather from "./Weather";

const API_KEY = "efed218f4bae782f6ffdad0e31ed1e8f";

export default class App extends Component {
  state = {
    isLoading: true,
    condition: "Clear",
    city: ""
  }
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
        name,
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp,
      city: name
    });
    console.log(name);
    console.log(weather);

  };
  getLocation = async () => {
    try {
      // Permission을 가지고 사용자의 로케이션을 얻기
      await Location.requestPermissionsAsync();
      // 위도, 경도만 저장 하고 싶을 때 
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      // 위치를 가져오면 로딩화면이 안보이게 처리
      this.setState({ isLoading: false });
      console.log(latitude, longitude);
    } catch (error) {
      Alert.alert("찾질 수 없습니다 :(", "슬프군요...")
    }
  }

  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition, city } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} city={city} />;
  }
}

