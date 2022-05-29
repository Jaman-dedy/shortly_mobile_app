import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

const reactotron =
  typeof Reactotron.setAsyncStorageHandler === 'function'
    ? Reactotron.setAsyncStorageHandler(AsyncStorage)
    : Reactotron;

reactotron
  .configure({name: 'Shortly'})
  .useReactNative()
  .use(reactotronRedux())
  .connect();

export default reactotron;
