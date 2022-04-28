import { combineReducers } from 'redux';
import auth from './auth';
import alerts from './alerts';
import images from './images';
import bookmarks from './bookmarks';
import groups from './groups';

export default combineReducers({
    auth,
    alerts, 
    images,
    bookmarks,
    groups
});