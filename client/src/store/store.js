import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import albumsReducer from '../reducers/albums';
import artistsReducer from '../reducers/artists';
import playlistReducer from '../reducers/playlist';
import authReducer from '../reducers/authReducers';
import errorReducer from '../reducers/errorReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    albums: albumsReducer,
    artists: artistsReducer,
    playlist: playlistReducer,
    auth: authReducer,
    errors: errorReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;