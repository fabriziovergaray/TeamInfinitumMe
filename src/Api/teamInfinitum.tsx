import axios from 'axios';

const baseURL = 'https://infinitum.intecsu.com/restapi';

const teamInfinitum = axios.create({ baseURL });



export default teamInfinitum;
/* teamInfinitum.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers['x-token'] = token;
  }
  return config;
}); */