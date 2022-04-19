import { combineReducers } from 'redux';
import auth from './auth';
import alerts from './alerts';
import images from './images';
import bookmarks from './bookmarks';

export default combineReducers({
    auth,
    alerts, 
    images,
    bookmarks
});