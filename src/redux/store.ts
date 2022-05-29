import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, applyMiddleware, StoreEnhancer, Reducer} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import {
  persistStore,
  persistReducer,
  createTransform,
  purgeStoredState,
} from 'redux-persist';
import Flatted from 'flatted';

import Reactotron from '@app/ReactotronConfig';
import apiMiddleware from 'redux-thunk';
import rootReducer from '@app/redux/reducers';
import initialState from '@app/redux/initialState';

export const transformCircular = createTransform(
  (inboundState, _) => Flatted.stringify(inboundState),
  (outboundState, _) => Flatted.parse(outboundState),
);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['authentication'],
  transforms: [transformCircular],
};

export const purgePersistedState = () => purgeStoredState(persistConfig);

const middleware = [apiMiddleware];
const persistedReducer = persistReducer(persistConfig, rootReducer as Reducer);
const reactotronEnhancer = (
  typeof Reactotron.createEnhancer === 'function'
    ? Reactotron.createEnhancer()
    : Reactotron
) as StoreEnhancer;

const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware), reactotronEnhancer),
);

const persistor = persistStore(store);

export {store, persistor};
